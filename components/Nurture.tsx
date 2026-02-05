'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from 'next-sanity';

const Nurture = () => {
  const nurt = useGetQuery('nurture', '/nurture');

  return (
    <div className="flex flex-col p-6 sm:p-0 sm:flex-row gap-10 mx-auto container my-20">
      <div className="flex-1">
        <div className='mb-6'>
          <h5 className="mb-4">{nurt[0] && nurt[0]?.title}</h5>
          <PortableText value={nurt[0] ? nurt[0]?.content[0].body : ''} />
        </div>
        <div
          className="sm:h-100 py-50 sm:py-0 rounded-2xl"
          style={{
            backgroundImage: `url(${nurt[0] && nurt[0]?.content[0].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
      <div className="flex-1">
        <div
          className="sm:h-130 rounded-2xl mb-6 py-50 sm:py-0"
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
