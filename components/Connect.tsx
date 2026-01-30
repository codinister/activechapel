'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from 'next-sanity';
import { GiChurch } from 'react-icons/gi';
import { GiSelfLove } from 'react-icons/gi';
import { MdOutlineVolunteerActivism } from 'react-icons/md';

const Connect = () => {
  const conn = useGetQuery('connect', '/connect');

  return (
    <div className="py-20 mx-auto ">
      <div className="text-center mb-12">
        <p>{conn[0] && conn[0]?.subtitle}</p>
        <h4>{conn[0] && conn[0]?.title}</h4>
      </div>

      <div className="flex gap-10 container mx-auto">
        {conn[0]
          ? conn[0].content.map(
              (
                v: {
                  title: string;
                  body: any;
                },
                k: number,
              ) => (
                <div key={k} className="flex-1 text-left p-10 shadow-2xl">
                  {v.title === 'Come & Join Us' && (
                    <GiChurch className="text-6xl text-primary" />
                  )}

                  {v.title === 'Share the Love' && (
                    <GiSelfLove className="text-6xl text-primary" />
                  )}

                  {v.title === 'Volunteer' && (
                    <MdOutlineVolunteerActivism className="text-6xl text-primary" />
                  )}

                  <h6 className="my-4 font-bold">{v.title}</h6>

                  <PortableText value={v.body} />
                </div>
              ),
            )
          : ''}
      </div>
    </div>
  );
};

export default Connect;
