import { TbArrowUpRight } from 'react-icons/tb';

const ProjectCard = ({ name, image, url, description, technologies }) => {
  return (
    <div
      id='child'
      className='flex flex-col lg:even:flex-row-reverse md:[&_ul]:even:ml-0 md:[&_h3]:even:text-left md:[&_p]:even:text-left lg:flex-row p-4 md:p-8 gap-5 rounded-xl hover:scale-[1.01] transition-transform ease-out duration-100 ring-1 ring-primary'>
      <img
        className='w-full lg:w-1/2 h-auto bg-slate-600 rounded-lg hover:scale-[1.03] transition-transform ease-out duration-100'
        src={image}
        alt='Image was unable to be loaded'
      />

      <div className='flex md:text-right flex-col justify-center lg:w-1/2'>
        <a href={url} target='_blank' rel='noreferrer'>
          <h3 className='text-xl md:text-2xl [&_.arrow]:hover:animate-bounce leading-loose mb-4 hover:text-primary '>
            {name} <TbArrowUpRight className='inline arrow' />
          </h3>
        </a>
        <p className='text-gray-400 mb-4'>{description}</p>
        <ul className='text-primary md:ml-auto text-center flex gap-2 flex-wrap'>
          {technologies.map((technology) => {
            return (
              <li
                key={technology}
                className='bg-[#00ddff27] select-none rounded-3xl flex items-center justify-center px-4 py-1'>
                {technology}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
