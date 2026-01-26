'use client';

import useGetQuery from '@/state/query/useGetQuery';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = useGetQuery('stats', '/stats');

  return (
    <div className="bg-secondary py-15">
      <div className="w-4xl flex gap-15 flex-col md:flex-row mx-auto justify-center">
        {stats[0] &&
          stats[0]?.content.map(
            (v: { title: string; subtitle: string }, k: number) => (
              <div
                key={k}
                className="flex-1 flex items-center justify-center gap-6"
              >
                <div className="text-white">{v.title}</div>
                <div className=" text-secondary w-27 border-2 border-white h-27 rounded-full   flex justify-center items-center">
                  <h5 className="bold text-white">
                    <CountUp end={Number(v.subtitle)} duration={2} delay={2} />
                  </h5>
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default Stats;
