import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'jyruka_founder_avatar';
const DEFAULT_AVATAR = '/ruthram-profile.png';
const EVENT_NAME = 'founder-avatar-updated';

export function getFounderAvatar(): string {
  if (typeof window === 'undefined') return DEFAULT_AVATAR;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image/')) return saved;
  } catch {
    // Ignore error
  }
  return DEFAULT_AVATAR;
}

export async function setFounderAvatar(dataUrl: string): Promise<boolean> {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: dataUrl }));

    // Also persist to public/ruthram-profile.png via server
    try {
      await fetch('/api/upload-avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUrl })
      });
    } catch {
      // LocalStorage already holds it
    }
    return true;
  } catch (e) {
    console.error('Failed to save avatar:', e);
    return false;
  }
}

export function useFounderAvatar(): [string, (file: File) => Promise<boolean>, boolean] {
  const [avatar, setAvatar] = useState<string>(getFounderAvatar);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setAvatar(customEvent.detail);
      }
    };
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, []);

  const updateFromFile = useCallback(async (file: File): Promise<boolean> => {
    if (!file.type.startsWith('image/')) {
      return false;
    }
    setIsUpdating(true);
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAvatar(result);
          await setFounderAvatar(result);
          setIsUpdating(false);
          resolve(true);
        } else {
          setIsUpdating(false);
          resolve(false);
        }
      };
      reader.onerror = () => {
        setIsUpdating(false);
        resolve(false);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return [avatar, updateFromFile, isUpdating];
}
