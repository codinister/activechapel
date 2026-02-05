'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { BiBible } from 'react-icons/bi';

const Weeklyactivities = () => {
  const wkly = useGetQuery('weeklyactivities', '/weeklyactivities');

  return (
    <div className="container mx-auto sm:py-15 p-6">
      <h3 className="text-center  text-secondary">
        Weekly <span className='text-primary'>Activities</span>
      </h3>
      <div className="w-15 border-primary border-b-2 mx-auto mt-6 mb-20">

      </div>

      <div className="flex flex-col p-6 sm:p-0 sm:flex-row gap-10">
        {wkly[0]
          ? wkly[0].content.map(
              (v: { title: string; subtitle: string }, k: number) => {
                return (
                  <div
                    key={k}
                    className="flex-1 text-center p-10 shadow-xl rounded-3xl"
                  >
                    <BiBible className="text-primary text-7xl mx-auto" />
                    <p className='my-4'>{v.title}</p>
                    <h6 className="font-bold">{v.subtitle}</h6>
                  </div>
                );
              },
            )
          : ''}
      </div>
    </div>
  );
};

export default Weeklyactivities;
