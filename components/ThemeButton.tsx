'use client';

import Shuffle from '@/components/icons/Shuffle';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemeButton() {
  const { cycleTheme } = useThemeContext();

  return (
    <button
      onClick={cycleTheme}
      className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-200"
      aria-label="Change theme"
    >
      <Shuffle size={15} />
    </button>
  );
}
