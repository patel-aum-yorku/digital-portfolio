import useSound from 'use-sound';
import scrollSound from '../assets/scroll-sound.mp3';
import { useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function ScrollSoundToggle() {
  const [play, { sound }] = useSound(scrollSound, {
    volume: 0.2,
    interrupt: true,
    soundEnabled: false,
  });

  const [enabled, setEnabled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleSound = async () => {
    if (sound?.context?.state === 'suspended') {
      await sound.context.resume();
    }
    setEnabled(prev => !prev);
  };

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScroll > 500) {
        play();
        setLastScroll(now);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, lastScroll, play]);

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 p-3 bg-indigo-600 hover:bg-indigo-800 text-white rounded-full shadow-lg transition duration-300"
      aria-label="Toggle Scroll Sound"
    >
      {enabled ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
    </button>
  );
}