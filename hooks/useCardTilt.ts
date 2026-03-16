import { useRef } from 'react';

export function useCardTilt() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    cardRef.current.style.transition = 'transform 0.1s ease';
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return { cardRef, handleMouseMove, handleMouseLeave };
}
