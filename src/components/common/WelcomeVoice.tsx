import React, { useEffect } from 'react';

export const WelcomeVoice: React.FC = () => {
  useEffect(() => {
    // Check if already spoken in this session
    if (sessionStorage.getItem('jyruka_welcome_spoken')) return;

    const speakWelcome = () => {
      if (!('speechSynthesis' in window)) return;
      if (sessionStorage.getItem('jyruka_welcome_spoken')) return;

      // Cancel any prior speech
      window.speechSynthesis.cancel();

      const text = "Hi, welcome to Jyruka Technologies. We are delighted to have you here. Explore our elite engineering squads and bring your vision to life with absolute confidence.";
      const utterance = new SpeechSynthesisUtterance(text);

      // Natural female voice settings
      utterance.rate = 0.95;
      utterance.pitch = 1.15;
      utterance.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.toLowerCase().includes('female') ||
           v.name.toLowerCase().includes('zira') ||
           v.name.toLowerCase().includes('susan') ||
           v.name.toLowerCase().includes('karen') ||
           v.name.toLowerCase().includes('victoria') ||
           v.name.toLowerCase().includes('fiona') ||
           v.name.toLowerCase().includes('samantha') ||
           v.name.toLowerCase().includes('hazel') ||
           v.name.toLowerCase().includes('catherine') ||
           v.name.includes('Google UK English Female'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.onend = () => {
        sessionStorage.setItem('jyruka_welcome_spoken', 'true');
      };

      window.speechSynthesis.speak(utterance);
      sessionStorage.setItem('jyruka_welcome_spoken', 'true');
    };

    // Attempt immediately
    try {
      speakWelcome();
    } catch {
      // Ignored if autoplay is blocked until interaction
    }

    // Also listen for voiceschanged if voices weren't loaded yet
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        if (!sessionStorage.getItem('jyruka_welcome_spoken')) {
          speakWelcome();
        }
      };
    }

    // Fallback automatic trigger on any page interaction (scroll, click, pointer, touch, key) to satisfy browser audio policies instantly
    const handleAutoPlay = () => {
      if (!sessionStorage.getItem('jyruka_welcome_spoken')) {
        speakWelcome();
      }
      window.removeEventListener('pointerdown', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      window.removeEventListener('scroll', handleAutoPlay);
      window.removeEventListener('mousemove', handleAutoPlay);
      window.removeEventListener('keydown', handleAutoPlay);
    };

    window.addEventListener('pointerdown', handleAutoPlay, { once: true });
    window.addEventListener('touchstart', handleAutoPlay, { once: true });
    window.addEventListener('scroll', handleAutoPlay, { once: true });
    window.addEventListener('mousemove', handleAutoPlay, { once: true });
    window.addEventListener('keydown', handleAutoPlay, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      window.removeEventListener('scroll', handleAutoPlay);
      window.removeEventListener('mousemove', handleAutoPlay);
      window.removeEventListener('keydown', handleAutoPlay);
    };
  }, []);

  return null;
};
