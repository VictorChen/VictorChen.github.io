import type { ComponentType } from 'react';
import type { IconProps, SocialIconKey } from '@/types';

export { default as LinkedIn } from './LinkedIn';
export { default as GitHub } from './GitHub';
export { default as X } from './X';
export { default as Mail } from './Mail';
export { default as Shuffle } from './Shuffle';

import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import X from './X';
import Mail from './Mail';

export const socialIcons: Record<SocialIconKey, ComponentType<IconProps>> = {
  linkedin: LinkedIn,
  github: GitHub,
  x: X,
  mail: Mail,
};
