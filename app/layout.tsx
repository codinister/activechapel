import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/state/query/QueryProvider';
import Footer from '@/components/Footer';
import Nav from '@/components/navbar/Nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Active Believers Chapel International',
  description: 'Based in Ghana and UK',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  data-qb-installed="true" suppressHydrationWarning={true}>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
