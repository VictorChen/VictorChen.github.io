export interface Theme {
  bg: string;
  blobs: [string, string, string];
}

export interface Interest {
  emoji: string;
  label: string;
}

export type SocialIconKey = 'linkedin' | 'github' | 'x' | 'mail';

export interface SocialLink {
  icon: SocialIconKey;
  href: string;
  label: string;
  hoverClass: string;
}

export interface IconProps {
  size?: number;
}
