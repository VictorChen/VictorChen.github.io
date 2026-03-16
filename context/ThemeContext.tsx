'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '@/constants';

type Theme = (typeof themes)[number];

interface ThemeContextValue {
  theme: Theme;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    setThemeIndex(Math.floor(Math.random() * themes.length));
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[themeIndex],
        cycleTheme: () => setThemeIndex((i) => (i + 1) % themes.length),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
}
