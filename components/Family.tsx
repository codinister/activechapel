'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from 'next-sanity';

const Family = () => {
  const fam = useGetQuery('family', '/family');

  return (
    <div className="container mx-auto py-20 flex">
      <div
        className="h-100 flex-1 rounded-2xl"
        style={{
          backgroundImage: `url(${fam[0] && fam[0]?.content.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div className="p-10 flex-1">
        <h5 className="mb-6">{fam[0] && fam[0]?.content.title}</h5>

        <div>
          <PortableText value={fam[0] && fam[0]?.content.body} />
        </div>
      </div>
    </div>
  );
};

export default Family;
