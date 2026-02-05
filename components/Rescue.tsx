'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';

const Rescue = () => {
  const resc = useGetQuery('rescue', '/rescue') || [];



  return (
    <div className="container mx-auto p-6 sm:p-0 sm:py-20 flex flex-col sm:flex-row">
      <div
        className="sm:h-112 sm:py-0 py-80 flex-1 rounded-2xl"
        style={{
          backgroundImage: `url(${resc[0]?.content.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div className="p-10 flex-1">
        <p>{resc[0] && resc[0]?.content.subtitle}</p>
        <h5 className="mb-6">{resc[0] && resc[0]?.content.title}</h5>
        <div className="mb-8">{resc[0] && resc[0]?.content.excerpt}</div>
        <Button size="lg">Read more</Button>
      </div>
    </div>
  );
};

export default Rescue;
