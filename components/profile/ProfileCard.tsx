'use client';

import { useMounted } from '@/hooks/useMounted';
import { useCardTilt } from '@/hooks/useCardTilt';
import ProfileHeader from './ProfileHeader';
import SocialLinks from './SocialLinks';
import Interests from './Interests';

export default function ProfileCard() {
  const mounted = useMounted();
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm z-10"
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="flex flex-col items-center pt-8 pb-6 px-8">
          <ProfileHeader />
          <SocialLinks />
        </div>
        <div
          className={`border-t border-white/10 mx-6 ${mounted ? 'anim-item' : 'opacity-0'}`}
          style={{ animationDelay: '0.35s' }}
        />
        <Interests />
      </div>
    </div>
  );
}
