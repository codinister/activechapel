'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Welcome = () => {
  const wlc = useGetQuery('welcome', '/welcome') || [];

  return (
    <div
      style={{
        backgroundImage: `url(${wlc[0] ? wlc[0]?.image : ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className=" welcome-box sm:h-120 flex-col p-6 sm:flex-row"
     >
      <div className="sm:w-2xl">
        <h6 className="text-primary">
          {wlc[0] ? wlc[0]?.content.subtitle : ''}
        </h6>
        <h4 className="text-white pr-15 font-bold">{wlc[0] ? wlc[0]?.content.title : ''}</h4>
      </div>
    </div>
  );
};

export default Welcome;
