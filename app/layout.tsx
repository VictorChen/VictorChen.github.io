import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Chen',
  description: 'Personal website for Victor Chen.',
  authors: [{ name: 'Victor Chen' }],
  keywords: ['engineer', 'frontend', 'full stack', 'javascript', 'software', 'Victor Chen', 'web'],
  openGraph: {
    title: 'Victor Chen',
    description: 'Software Engineer',
    url: 'https://chenvic.com',
    siteName: 'Victor Chen',
    images: [{ url: 'https://chenvic.com/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Chen',
    description: 'Software Engineer',
    images: ['https://chenvic.com/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
