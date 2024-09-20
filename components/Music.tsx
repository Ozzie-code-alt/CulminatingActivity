'use client';
import { useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log('Autoplay prevented by browser: ', error);
        });
      }
      window.removeEventListener('click', playMusic); // Remove the listener once music starts
    };

    window.addEventListener('click', playMusic);

    return () => {
      window.removeEventListener('click', playMusic);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src='/song.mp3' type='audio/mp3' />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleMute}>Mute/Unmute</button>
    </div>
  );
}
