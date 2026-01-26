'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';

const Mission = () => {
  const miss = useGetQuery('mission', '/mission');


  return (
    <div className="flex container mx-auto mt-10">
      <div
        className="flex-1 h-90 rounded-2xl"
        style={{
          backgroundImage: `url(${miss[0] ? miss[0]?.image : ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div className="flex-1 py-10 pl-10">
        <h5 className="mb-6">{miss[0]?.content.title}</h5>
        <p className="mb-12">{miss[0]?.content.excerpt}</p>
        <Button size="sm" variant="outline">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Mission;
