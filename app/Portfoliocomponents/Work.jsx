import dynamic from 'next/dynamic';

const DynamicWorks = dynamic(() => import('./Works'), { ssr: false });

const Work = () => {
  const images = [
    '/portfolio/alfan.png',
    '/portfolio/aromatic.jpg',
    '/portfolio/blood donors.png',
    '/portfolio/bood donor.jpg',
    '/portfolio/blood donor2.png',
    '/portfolio/e and n.png',
    '/portfolio/entrecon.png',
    '/portfolio/hstcae.png',
    '/portfolio/hurelife.png',
    '/portfolio/kumars dental.jpg',
    '/portfolio/news portal.png',
    '/portfolio/riderzpal.png',
    '/portfolio/SNJ.png',
    '/portfolio/sunrise.png',
    '/portfolio/techmasters.png',
    '/portfolio/tracking.png',
    '/portfolio/warehouse -web.png',
    '/portfolio/warehouse-app.png',
  ];

  return (
    <div className="w-full min-h-screen">
      <DynamicWorks images={images} />
    </div>
  );
};

export default Work;