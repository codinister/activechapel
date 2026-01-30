'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from 'next-sanity';

const Nurture = () => {
  const nurt = useGetQuery('nurture', '/nurture');

  return (
    <div className="flex gap-10 mx-auto container my-20">
      <div className="flex-1">
        <div className='mb-6'>
          <h5 className="mb-4">{nurt[0] && nurt[0]?.title}</h5>
          <PortableText value={nurt[0] ? nurt[0]?.content[0].body : ''} />
        </div>
        <div
          className="h-100 rounded-2xl"
          style={{
            backgroundImage: `url(${nurt[0] && nurt[0]?.content[0].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
      <div className="flex-1">
        <div
          className="h-130 rounded-2xl mb-6"
          style={{
            backgroundImage: `url(${nurt[0] && nurt[0]?.content[1].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
        <div>
          <PortableText value={nurt[0] ? nurt[0]?.content[1].body : ''} />
        </div>
      </div>
    </div>
  );
};

export default Nurture;
