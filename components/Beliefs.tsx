'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Link from 'next/link';
import { PortableText } from 'next-sanity';

const Beliefs = () => {
  const beliefs = useGetQuery('beliefs', '/beliefs');

  return (
    <div className="flex flex-col p-6  sm:p-0 sm:flex-row container mx-auto mb-15">
      <div className="flex-1 py-6 sm:py-10 sm:pr-10">
        <h5 className="mb-6">{beliefs[0]?.title}</h5>
        <div className="mb-12">
          <PortableText value={beliefs[0]?.excerpt} />
        </div>

      </div>
      <div
        className="flex-1 h-90 rounded-2xl py-80 sm:py-0"
        style={{
          backgroundImage: `url(${beliefs[0] ? beliefs[0]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  );
};

export default Beliefs;
