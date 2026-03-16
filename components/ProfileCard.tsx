'use client';

import Image from 'next/image';
import { interests, socialLinks, roles } from '@/constants';
import { useCardTilt } from '@/hooks/useCardTilt';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useThemeContext } from '@/context/ThemeContext';

export default function ProfileCard() {
  const { mounted } = useThemeContext();
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();
  const role = useTypewriter(roles);

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm z-10"
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

        {/* Profile */}
        <div className="flex flex-col items-center pt-8 pb-6 px-8">
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

          {/* Social links */}
          <div
            className={`flex items-center gap-1.5 mt-5 ${mounted ? 'anim-item' : 'opacity-0'}`}
            style={{ animationDelay: '0.25s' }}
          >
            {socialLinks.map(({ icon: Icon, href, label, hoverClass }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white/50 transition-all duration-200 ${hoverClass}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t border-white/10 mx-6 ${mounted ? 'anim-item' : 'opacity-0'}`}
          style={{ animationDelay: '0.35s' }}
        />

        {/* Interests */}
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
      </div>
    </div>
  );
}
