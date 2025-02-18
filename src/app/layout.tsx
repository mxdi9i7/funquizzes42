import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Quiz Time - Fun Educational Quizzes',
  description:
    'Challenge yourself with interactive quizzes on geography, history, and more. Improve your knowledge while having fun!',
  keywords:
    'quiz, educational quiz, geography quiz, history quiz, learning games',
  openGraph: {
    title: 'Quiz Time - Fun Educational Quizzes',
    description:
      'Challenge yourself with interactive quizzes on geography, history, and more. Improve your knowledge while having fun!',
    url: 'https://quiztime.com',
    siteName: 'Quiz Time',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-9395586045140503',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href='https://quiztime.com' />
        <meta name='google-adsense-account' content='ca-pub-9395586045140503' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
