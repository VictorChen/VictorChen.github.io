'use client';

import { socialLinks } from '@/constants';
import { socialIcons } from '@/components/icons';
import { useMounted } from '@/hooks/useMounted';

export default function SocialLinks() {
  const mounted = useMounted();

  return (
    <div
      className={`flex items-center gap-1.5 mt-5 ${mounted ? 'anim-item' : 'opacity-0'}`}
      style={{ animationDelay: '0.25s' }}
    >
      {socialLinks.map(({ icon, href, label, hoverClass }) => {
        const Icon = socialIcons[icon];
        return (
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
        );
      })}
    </div>
  );
}
