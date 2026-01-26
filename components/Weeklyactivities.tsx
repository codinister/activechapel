'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { BiBible } from 'react-icons/bi';

const Weeklyactivities = () => {
  const wkly = useGetQuery('weeklyactivities', '/weeklyactivities');

  return (
    <div className="container mx-auto py-15 ">
      <h4 className="text-center  text-secondary">Weekly Activities</h4>
      <div className="w-15 border-primary border-b-2 mx-auto mt-6 mb-20"></div>

      <div className="flex gap-10">
        {wkly[0]
          ? wkly[0].content.map(
              (v: { title: string; subtitle: string }, k: number) => {
                return (
                  <div
                    key={k}
                    className="flex-1 text-center p-10 shadow-xl rounded-3xl"
                  >
                    <BiBible className="text-primary text-5xl mx-auto" />
                    <p>{v.title}</p>
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
