import LinkedIn from '@/components/icons/LinkedIn';
import GitHub from '@/components/icons/GitHub';
import X from '@/components/icons/X';
import Mail from '@/components/icons/Mail';

export const themes = [
  { bg: '#0f0c29', blobs: ['#7b2ff7', '#f107a3', '#302b63'] },
  { bg: '#0d1b2a', blobs: ['#1e6091', '#48cae4', '#023e8a'] },
  { bg: '#1a0533', blobs: ['#e040fb', '#7c4dff', '#ff4081'] },
  { bg: '#0a2e1a', blobs: ['#00c853', '#1de9b6', '#76ff03'] },
  { bg: '#1a0a00', blobs: ['#ff6d00', '#ff9100', '#ff3d00'] },
  { bg: '#0d0d2b', blobs: ['#3d5afe', '#00b0ff', '#aa00ff'] },
  { bg: '#1a1a1a', blobs: ['#f50057', '#d500f9', '#ff6d00'] },
];

export const roles = ['Frontend Engineer', 'Hacker', 'Vibe Coder', 'Memer', 'Certified Bag Holder'];

export const interests = [
  { emoji: '🏂', label: 'Snowboarding' },
  { emoji: '📈', label: 'Stonks' },
  { emoji: '🌐', label: 'Frontend Dev' },
  { emoji: '🐶', label: 'Animals' },
  { emoji: '💻', label: 'JavaScript' },
  { emoji: '🐸', label: 'Memes' },
  { emoji: '🃏', label: 'Magic' },
  { emoji: '⛩️', label: 'Anime' },
  { emoji: '🤖', label: 'Android' },
];

export const socialLinks = [
  {
    icon: LinkedIn,
    href: 'https://www.linkedin.com/in/vichen',
    label: 'LinkedIn',
    hoverClass: 'hover:bg-[#0077B5] hover:text-white',
  },
  {
    icon: GitHub,
    href: 'https://github.com/VictorChen',
    label: 'GitHub',
    hoverClass: 'hover:bg-[#25292E] hover:text-white',
  },
  {
    icon: X,
    href: 'https://x.com/itxVic',
    label: 'X',
    hoverClass: 'hover:bg-[#000000] hover:text-white',
  },
  {
    icon: Mail,
    href: 'mailto:chen_victor@ymail.com',
    label: 'Email',
    hoverClass: 'hover:bg-[#DB4437] hover:text-white',
  },
];
