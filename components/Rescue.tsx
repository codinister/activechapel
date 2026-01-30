'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';

const Rescue = () => {
  const resc = useGetQuery('rescue', '/rescue') || [];

  console.log(resc[0])

  return (
    <div className="container mx-auto py-20 flex">
      <div
        className="h-112 flex-1 rounded-2xl"
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
