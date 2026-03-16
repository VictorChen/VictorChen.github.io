'use client';

import { useThemeContext } from '@/context/ThemeContext';
import { useCursorGlow } from '@/hooks/useCursorGlow';
import Background from '@/components/Background';

export default function PageShell({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();
  const { glowRef, handleMouseMove, handleMouseLeave } = useCursorGlow(theme.blobs[0]);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      style={{ background: theme.bg, transition: 'background 0.8s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Background glowRef={glowRef} />
      {children}
    </main>
  );
}
