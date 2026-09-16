import React, { useEffect, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const WelcomeVoice: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const speakGreeting = useCallback((force = false) => {
    if (!('speechSynthesis' in window)) return;

    // If already spoken in session and not forced by button click, return
    if (!force && sessionStorage.getItem('jyruka_welcome_spoken')) {
      setHasPlayedOnce(true);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const text = "Hi, welcome to Jyruka Technologies. We are delighted to have you here. Explore our elite engineering squads and bring your vision to life with absolute confidence.";
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Mature male voice tuning
    utterance.rate = 0.92;
    utterance.pitch = 0.85;
    utterance.volume = 1.0;

    const executeSpeech = () => {
      const voices = window.speechSynthesis.getVoices();
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

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        setHasPlayedOnce(true);
        sessionStorage.setItem('jyruka_welcome_spoken', 'true');
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      sessionStorage.setItem('jyruka_welcome_spoken', 'true');
      setHasPlayedOnce(true);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      executeSpeech();
    } else {
      window.speechSynthesis.onvoiceschanged = executeSpeech;
      setTimeout(() => {
        if (!isPlaying) {
          executeSpeech();
        }
      }, 400);
    }
  }, [isPlaying]);

  useEffect(() => {
    // Attempt automatic play on load
    try {
      speakGreeting(false);
    } catch {
      // Browser autoplay restriction
    }

    // Also trigger on first user interaction if blocked
    const handleInteraction = () => {
      if (!sessionStorage.getItem('jyruka_welcome_spoken')) {
        speakGreeting(false);
      }
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [speakGreeting]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={() => speakGreeting(true)}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-lg border border-slate-700/50 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
        title="Play / Replay Welcome Voice Greeting"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        {isPlaying ? (
          <VolumeX className="w-4 h-4 text-emerald-400 animate-pulse" />
        ) : (
          <Volume2 className="w-4 h-4 text-emerald-400" />
        )}

        <span className="text-xs font-medium tracking-wide pr-1">
          {isPlaying ? 'Speaking...' : 'Welcome Audio'}
        </span>
      </button>
    </div>
  );
};
