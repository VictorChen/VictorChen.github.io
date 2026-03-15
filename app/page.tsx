'use client';

import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useMemo } from 'react';

const themes = [
  { bg: '#0f0c29', blobs: ['#7b2ff7', '#f107a3', '#302b63'] },
  { bg: '#0d1b2a', blobs: ['#1e6091', '#48cae4', '#023e8a'] },
  { bg: '#1a0533', blobs: ['#e040fb', '#7c4dff', '#ff4081'] },
  { bg: '#0a2e1a', blobs: ['#00c853', '#1de9b6', '#76ff03'] },
  { bg: '#1a0a00', blobs: ['#ff6d00', '#ff9100', '#ff3d00'] },
  { bg: '#0d0d2b', blobs: ['#3d5afe', '#00b0ff', '#aa00ff'] },
  { bg: '#1a1a1a', blobs: ['#f50057', '#d500f9', '#ff6d00'] },
];

const interests = [
  { icon: '/icons/snowboarder.png', label: 'Snowboarding' },
  { icon: '/icons/increase.png', label: 'Stonks' },
  { icon: '/icons/globe.png', label: 'Frontend Dev' },
  { icon: '/icons/dog.png', label: 'Animals' },
  { icon: '/icons/code.png', label: 'JavaScript' },
  { icon: '/icons/troll.png', label: 'Memes' },
  { icon: '/icons/cards.png', label: 'Magic' },
  { icon: '/icons/anime.png', label: 'Anime' },
  { icon: '/icons/android.png', label: 'Android' },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/vichen',
    label: 'LinkedIn',
    hoverClass: 'hover:bg-[#0077B5] hover:text-white',
  },
  {
    icon: Github,
    href: 'https://github.com/VictorChen',
    label: 'GitHub',
    hoverClass: 'hover:bg-[#25292E] hover:text-white',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/itxVic',
    label: 'Twitter',
    hoverClass: 'hover:bg-[#1DA1F2] hover:text-white',
  },
  {
    icon: Mail,
    href: 'mailto:chen_victor@ymail.com',
    label: 'Email',
    hoverClass: 'hover:bg-[#DB4437] hover:text-white',
  },
];

export default function Home() {
  const theme = useMemo(() => themes[Math.floor(Math.random() * themes.length)], []);

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      style={{ background: theme.bg }}
    >
      {/* Animated blobs */}
      <div className="blob blob-1 w-96 h-96 -top-20 -left-20" style={{ background: theme.blobs[0] }} />
      <div className="blob blob-2 w-80 h-80 top-1/2 -right-20" style={{ background: theme.blobs[1] }} />
      <div className="blob blob-3 w-72 h-72 -bottom-20 left-1/3" style={{ background: theme.blobs[2] }} />

      {/* Card */}
      <div className="relative w-full max-w-sm z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          {/* Profile */}
          <div className="flex flex-col items-center pt-8 pb-6 px-8">
            <Image
              src="/victor-head.jpg"
              alt="Victor Chen"
              width={96}
              height={96}
              className="rounded-full ring-4 ring-white/30 shadow-xl object-cover"
              priority
            />
            <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">Victor Chen</h1>
            <p className="mt-1 text-sm text-white/60 font-medium">Software Engineer</p>

            {/* Social links */}
            <div className="flex items-center gap-1.5 mt-5">
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
          <div className="border-t border-white/10 mx-6" />

          {/* Interests */}
          <div className="px-6 py-5">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium"
                >
                  <Image src={icon} alt={label} width={13} height={13} className="opacity-80" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
