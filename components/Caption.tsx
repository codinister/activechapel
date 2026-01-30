'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Caption = () => {
  const cap = useGetQuery('caption', '/caption');

  return (
    <div className="bg-primary py-20 flex justify-center items-center text-white">
      <h4 className="w-190 text-center">{cap[0] && cap[0]}</h4>
    </div>
  );
};

export default Caption;
