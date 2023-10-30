import type { Metadata } from 'next';
import { poppins, nunito } from '@/lib/utils/font';
import { cn } from '@/lib/utils/cn';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
// import { Header } from '@/components/header';
// import { Footer } from '@/components/footer';

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

export const viewports: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex min-h-screen flex-col'>
            {/* <Header /> */}
            <main className='flex-1'>{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
