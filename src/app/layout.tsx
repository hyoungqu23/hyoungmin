import { Footer, Header, TrackingTools } from '@apps';
import { BASE_URL, LINKS, cls, type TLayoutProps } from '@shared';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';

import '@apps/styles/globals.css';

const Pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Light.subset.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Thin.subset.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--pretendard',
});

export const generateMetadata = () => {
  return {
    metadataBase: new URL(BASE_URL),
    title: 'HyoungMin Tech Blog',
    description: 'Tech Blog By Frontend Engineer HyoungMin',
    keywords:
      'Next.js, React, Git, GitHub, React-Three-Fiber, R3F, Three.js, React-Hook-Form, App Router, Page Router, Firebase, Supabase, Frontend, Engineer, Backend, Fullstack, I18N, Internationalization, L11N, Localization, Route Handler, 프론트엔드, 리액트, 넥스트, 개발자, 개발자 블로그, 개발 블로그, 테크 블로그, 이형민, 개발자 이형민, 프론트엔드 이형민, 프론트엔드 개발자 이형민',
    authors: [{ name: 'HyoungMin', url: LINKS.GITHUB.href }],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: 'HyoungMin Tech Blog',
      description: 'Tech Blog By Frontend Engineer HyoungMin',
      images: [
        {
          url: '' ?? '/images/web/hero_background.png',
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'HyoungMin Tech Blog',
      locale: 'ko',
      type: 'website',
      url: new URL(BASE_URL),
    },
    twitter: {
      title: 'HyoungMin Tech Blog',
      description: 'Tech Blog By Frontend Engineer HyoungMin',
      url: new URL(BASE_URL),
      images: {
        url: '' ?? '/images/web/hero_background.png',
        alt: 'Thumbnail',
      },
    },
  };
};

const RootLayout = ({ children }: TLayoutProps) => {
  return (
    <html lang='ko'>
      <TrackingTools />
      <body
        className={cls(
          Pretendard.className,
          'relative bg-secondary-500 text-primary-50 w-screen flex flex-col items-center min-h-screen overflow-x-hidden',
        )}
      >
        <Header />
        <main role='main' className='max-w-[1024px] flex-1'>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
