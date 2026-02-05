'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  const sett = useGetQuery('settings', '/settings') || [];

  return (
    <div
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="hero-overlay h-150 relative"
    >
      <div className="p-6 md:p-0">
        <h6>{sett[0]?.title}</h6>
        <h1 className="mb-8 font-extrabold">Welcome to our church</h1>
        <Link href="/about">
        <Button size="lg">Connect</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
