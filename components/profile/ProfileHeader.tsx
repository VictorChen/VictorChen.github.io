'use client';

import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';
import { useTypewriter } from '@/hooks/useTypewriter';
import { roles } from '@/constants';

export default function ProfileHeader() {
  const { mounted } = useThemeContext();
  const role = useTypewriter(roles);

  return (
    <>
      <div className={mounted ? 'anim-item' : 'opacity-0'} style={{ animationDelay: '0.05s' }}>
        <Image
          src="/victor-head.jpg"
          alt="Victor Chen"
          width={96}
          height={96}
          className="rounded-full ring-4 ring-white/30 shadow-xl object-cover"
          priority
        />
      </div>
      <div
        className={`flex flex-col items-center ${mounted ? 'anim-item' : 'opacity-0'}`}
        style={{ animationDelay: '0.15s' }}
      >
        <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">Victor Chen</h1>
        <p className="mt-1 text-sm text-white/60 font-medium min-h-[1.25rem]">
          {role}
          <span className="blink-cursor">|</span>
        </p>
      </div>
    </>
  );
}
