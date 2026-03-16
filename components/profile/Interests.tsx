'use client';

import { interests } from '@/constants';
import { useMounted } from '@/hooks/useMounted';

export default function Interests() {
  const mounted = useMounted();

  return (
    <div
      className={`px-6 py-5 ${mounted ? 'anim-item' : 'opacity-0'}`}
      style={{ animationDelay: '0.45s' }}
    >
      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">
        Interests
      </p>
      <div className="flex flex-wrap gap-2">
        {interests.map(({ emoji, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 cursor-default"
          >
            <span>{emoji}</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
