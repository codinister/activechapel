'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import { PortableText } from 'next-sanity';

const Mission = () => {
  const miss = useGetQuery('mission', '/mission');


  return (
    <div className="flex p-6 sm:p-0 flex-col sm:flex-row container mx-auto mt-10">
      <div
        className="flex-1   rounded-2xl py-80 sm:py-0"
        style={{
          backgroundImage: `url(${miss[0] ? miss[0]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div className="flex-1 py-10 sm:pl-10">
        <h5 className="mb-6">{miss[0]?.content.title}</h5>
        <p className="mb-12">
          {miss[0]?.content.excerpt}
        </p>
   
      </div>
    </div>
  );
};

export default Mission;
