import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const Hero = () => {
  return (
    <main className='mb-32 pb-3'>
      <h1 className='text-3xl md:text-4xl font-bold leading-relaxed'>
        <motion.div
          className='inline-block'
          initial={{ opacity: 0.1, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 12,
          }}>
          Akpor U. Raphael
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: 'spring',
            stiffness: 80,
            damping: 12,
          }}
          className='inline-block text-3xl text-gray-400 md:w-4/5'>
          Get The Best Web Experience From Me.
        </motion.div>
      </h1>
      {/* <p className='flex gap-2 items-center my-4'>
        Open to work{' '}
        <div className='size-3 rounded-full border border-primary'>
          <div className=' bg-primary animate-ping w-full h-full rounded-full size-4'></div>
        </div>
      </p> */}
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          type: 'spring',
          stiffness: 70,
          damping: 12,
        }}
        className='my-4 text-gray-300 md:w-4/6 lg:w-1/2 capitalize'>
        I build blazingly fast frontend web apps with stunning UI, user friendly
        experience and best practices for search engine optimization.
        <br />
        <br />
        With passion for cutting-edge technologies and a commitment to clean,
        efficient code, I'm here to turn your ideas into reality. Lets's build
        something together.
      </motion.p>

      <div className='flex lg:items-center md:gap-16 gap-10 lg:justify-start justify-between flex-wrap flex-col lg:flex-row'>
        <ul className='flex space-x-4'>
          {socialLinks.map((social, index) => {
            return (
              <motion.li
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  type: 'spring',
                  stiffness: 80,
                  damping: 14,
                }}
                key={social.href}
                className='hover:text-primary hover:cursor-pointer hover:scale-[1.3] p-1'>
                <a href={social.href} target='_blank' rel='noopener noreferrer'>
                  {social.icon}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.3,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          className='px-6 py-3 rounded-md ring-2 ring-primary duration-200 transition-colors ease-in-out bg-primary font-semibold hover:bg-transparent hover:text-primary'>
          <a
            href='https://drive.google.com/file/d/1w4YgfMYXl81O7AA4MSWJFwbDy9OwTp6s/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'>
            Download my CV
          </a>
        </motion.button>
      </div>
    </main>
  );
};

export default Hero;
