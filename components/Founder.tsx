import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from 'next-sanity';

const Founder = () => {
  const founder = useGetQuery('founder', '/founder') || [];

  
  return (
    <div className="flex flex-col md:flex-row sm:flex-row">
      <div className="flex-1  p-6 sm:p-15 flex items-center">
        <div>
        <h6>{founder[0]?.content.subtitle}</h6>
        <h4 className="mb-6">{founder[0]?.content.title}</h4>
        <PortableText value={founder[0]?.content.body} />
        </div>
      </div>
      <div
        className=" flex-1 sm:h-130 py-80 sm:py-0"
        style={{
          backgroundImage: `url(${founder[0]?.content.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
    </div>
  );
};

export default Founder;
