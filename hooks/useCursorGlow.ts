import { useRef, useEffect } from 'react';

export function useCursorGlow(color: string) {
  const glowRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef(color);

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, ${colorRef.current}28, transparent 40%)`;
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.background = 'none';
  };

  return { glowRef, handleMouseMove, handleMouseLeave };
}
