// import { TbArrowUpRight } from 'react-icons/tb';

const Services = () => {
  return (
    <section className='mb-20'>
      <h2 className='text-xl mb-6 uppercase font-semibold'>
        Services I offer
      </h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {[
          {
            name: 'Web Development',
            img: '/assets/Development-cuate.svg',
          },
          {
            name: 'Web Hosting',
            img: '/assets/Cloud hosting-cuate.svg',
          },
          {
            name: 'Google Business Registration',
            img: '/assets/File searching-amico.svg',
          },
          {
            name: 'Search Engine \n Optimization',
            img: '/assets/SEO team.svg',
          },
        ].map((service, index) => (
          <div
            className={`${
              index > 0 && `mt-[${index * 10}rem]`
            } flex items-start flex-wrap justify-start flex-col gap-4`}>
            <img
              className='w-full rounded-xl h-[70%]'
              src={service.img}
              alt='Image was unable to be loaded'
            />
            <h2 className='text-xl mb-6 text-center w-full font-semibold'>
              {service.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
