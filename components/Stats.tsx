'use client';

import useGetQuery from '@/state/query/useGetQuery';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = useGetQuery('stats', '/stats');

  return (
    <div className="bg-secondary py-15">
      <div className="md:w-4xl sm:w-3xl flex gap-15 flex-col md:flex-row mx-auto justify-center">
        {stats[0] &&
          stats[0]?.content.map(
            (v: { title: string; subtitle: string }, k: number) => (
              <div
                key={k}
                className="flex-1 flex-col sm:flex-row flex items-center justify-center gap-6"
              >
                <div>
                  <div className="mx-auto mb-6 text-secondary  border-2 border-white h-28 w-28 rounded-full   flex justify-center items-center">
                    <h5 className="bold text-white">
                      <CountUp
                        end={Number(v.subtitle)}
                        duration={2}
                        delay={3}
                      />
                    </h5>
                  </div>
                  <div className="text-white">
                    <h6 className="text-center">{v.title}</h6>
                  </div>
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default Stats;
