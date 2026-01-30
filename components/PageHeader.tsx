'use client';

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div
      className="page-header h-70 flex justify-center items-center "
      style={{
        backgroundImage: `url('/page-header.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <h3 className="text-white">{title}</h3>
    </div>
  );
};

export default PageHeader;
