import React, { useEffect, useState } from 'react';

export const WelcomeVoice: React.FC = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;
    const alreadySpoken = sessionStorage.getItem('jyruka_welcome_spoken');
    if (alreadySpoken) {
      setInitialized(true);
      return;
    }

    const playGreeting = () => {
      if (!('speechSynthesis' in window)) return;
      if (sessionStorage.getItem('jyruka_welcome_spoken')) return;

      const text = "Hi, welcome to Jyruka Technologies. We are delighted to have you here. Explore our elite engineering squads and bring your vision to life with absolute confidence.";
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Mature male cadence settings
      utterance.rate = 0.92; // measured, professional pace
      utterance.pitch = 0.85; // deep, mature male pitch
      utterance.volume = 1.0;

      const loadVoicesAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        // Find a mature English male voice if available
        const selectedVoice = voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.toLowerCase().includes('david') ||
             v.name.toLowerCase().includes('daniel') ||
             v.name.toLowerCase().includes('george') ||
             v.name.toLowerCase().includes('james') ||
             v.name.toLowerCase().includes('alex') ||
             v.name.toLowerCase().includes('oliver') ||
             v.name.toLowerCase().includes('male') ||
             v.name.includes('Google UK English Male'))
        ) || voices.find((v) => v.lang.startsWith('en'));

        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }

        utterance.onend = () => {
          sessionStorage.setItem('jyruka_welcome_spoken', 'true');
          setInitialized(true);
        };

        window.speechSynthesis.speak(utterance);
        sessionStorage.setItem('jyruka_welcome_spoken', 'true');
        setInitialized(true);
      };

      if (window.speechSynthesis.getVoices().length > 0) {
        loadVoicesAndSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = loadVoicesAndSpeak;
        // Fallback timer in case voiceschanged doesn't fire
        setTimeout(() => {
          if (!sessionStorage.getItem('jyruka_welcome_spoken')) {
            loadVoicesAndSpeak();
          }
        }, 300);
      }
    };

    // Try speaking immediately on load
    try {
      playGreeting();
    } catch {
      // Browsers might block un-interacted audio
    }

    // Also trigger on first user click or touch if autoplay was restricted
    const handleFirstInteraction = () => {
      if (!sessionStorage.getItem('jyruka_welcome_spoken')) {
        playGreeting();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [initialized]);

  return null;
};
