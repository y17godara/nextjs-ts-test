import type { Metadata } from 'next';
import { fontSans } from '@/lib/font';
import { cn } from "@/lib/cn"
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s : ${siteConfig.name}`,
  },
  description: siteConfig.description,
  category: 'technology',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Personal Blog',
    'Personal Website',
    'Blog',
    'Website',
    'yashgodara.me',
    'y17godara',
  ],
  authors: [
    {
      name: 'y17godara',
      url: 'http://localhost:3000',
    },
  ],
  creator: 'y17godara',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@y17godara',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('http://localhost:3000'),
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} 
      >{children}</body>
    </html>
  );
}
