'use client';

import { useState, useEffect, useRef } from 'react';
import { Shuffle } from 'lucide-react';
import { themes, roles } from '@/lib/data';
import { useTypewriter } from '@/hooks/useTypewriter';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const theme = themes[themeIndex];
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const role = useTypewriter(roles);

  useEffect(() => {
    setThemeIndex(Math.floor(Math.random() * themes.length));
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, ${themeRef.current.blobs[0]}28, transparent 40%)`;
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = 'none';
    resetTilt();
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    cardRef.current.style.transition = 'transform 0.1s ease';
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg)`;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      style={{ background: theme.bg, transition: 'background 0.8s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow */}
      <div ref={glowRef} className="pointer-events-none fixed inset-0 z-0" />

      {/* Animated blobs */}
      <div className="blob blob-1 w-96 h-96 -top-20 -left-20" style={{ background: theme.blobs[0], transition: 'background 0.8s ease' }} />
      <div className="blob blob-2 w-80 h-80 top-1/2 -right-20" style={{ background: theme.blobs[1], transition: 'background 0.8s ease' }} />
      <div className="blob blob-3 w-72 h-72 -bottom-20 left-1/3" style={{ background: theme.blobs[2], transition: 'background 0.8s ease' }} />

      {/* Theme switcher */}
      <button
        onClick={() => setThemeIndex(i => (i + 1) % themes.length)}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-200"
        aria-label="Change theme"
      >
        <Shuffle size={15} />
      </button>

      <ProfileCard
        mounted={mounted}
        role={role}
        cardRef={cardRef}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={resetTilt}
      />
    </main>
  );
}
