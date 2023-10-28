import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Roboto,
  Poppins,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const robot = Roboto({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});
