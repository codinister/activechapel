'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Worship = () => {
  const wor = useGetQuery('worship', '/worship');

  return (
    <div className="py-15 bg-secondary px-6 sm:px-0">

      <div className="mb-20 text-white text-center">
      <p className='text-primary'>{wor[0]?.subtitle}</p>
      <h3>{wor[0]?.title}</h3>
      </div>

      <div className="flex flex-col sm:flex-row container mx-auto gap-10">
        {wor[0]
          ? wor[0]?.content.map(
              (
                v: { subtitle: string; title: string; image: string },
                k: number,
              ) => (
                <div key={k} className="flex-1">
                  <div
                  className="rounded-2xl h-55"
                    style={{
                      backgroundImage: `url(${v.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  ></div>
                  <div className="py-6 text-white">
                    <p className="text-primary">{v.subtitle}</p>
                    <h6>{v.title}</h6>
                  </div>
                </div>
              ),
            )
          : ''}
      </div>
    </div>
  );
};

export default Worship;
