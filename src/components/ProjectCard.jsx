import { TbArrowUpRight } from 'react-icons/tb';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ProjectCard = ({ name, image, url, description, technologies }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mControls.start('visible');
    }
  }, [isInView, mControls]);

  return (
    <motion.div
      ref={ref}
      className='flex flex-col lg:even:flex-row-reverse md:[&_ul]:even:ml-0 md:[&_h3]:even:text-left md:[&_p]:even:text-left lg:flex-row p-4 md:p-8 gap-5 rounded-xl hover:scale-[1.01] transition-transform ease-out duration-100 ring-1 ring-primary'
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mControls}
      transition={{ duration: 0.5, type: 'spring' }}>
      {/* Image with animation */}
      <motion.img
        className='w-full lg:w-1/2 h-auto bg-slate-600 rounded-lg hover:scale-[1.03] transition-transform ease-out duration-100'
        src={image}
        alt='Image was unable to be loaded'
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial='hidden'
        animate={mControls}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <div className='flex md:text-right flex-col justify-center lg:w-1/2'>
        {/* Title with animation */}
        <motion.a
          href={url}
          target='_blank'
          rel='noreferrer'
          initial={{ opacity: 0, y: -20 }}
          animate={mControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          <h3 className='text-xl md:text-2xl [&_.arrow]:hover:animate-bounce leading-loose mb-4 hover:text-primary'>
            {name} <TbArrowUpRight className='inline arrow' />
          </h3>
        </motion.a>

        {/* Description with animation */}
        <motion.p
          className='text-gray-400 mb-4'
          initial={{ opacity: 0 }}
          animate={mControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          {description}
        </motion.p>

        {/* Technologies list with animation */}
        <motion.ul
          className='text-primary md:ml-auto text-center flex gap-2 flex-wrap'
          initial={{ opacity: 0 }}
          animate={mControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, delay: 0.8 }}>
          {technologies.map((technology) => {
            return (
              <motion.li
                key={technology}
                className='bg-[#00ddff27] select-none rounded-3xl flex items-center justify-center px-4 py-1'
                initial={{ opacity: 0 }}
                animate={mControls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.6, delay: 1.0 }}>
                {technology}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
