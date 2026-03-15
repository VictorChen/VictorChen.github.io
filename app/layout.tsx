import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Chen',
  description: 'Personal website for Victor Chen.',
  authors: [{ name: 'Victor Chen' }],
  keywords: ['engineer', 'frontend', 'full stack', 'javascript', 'software', 'Victor Chen', 'web'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
