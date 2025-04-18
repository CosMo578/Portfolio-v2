import { TbCodeCircle } from 'react-icons/tb';
import Pic from '/images/Raph.jpg';
const About = () => {
  return (
    <section className='mb-20'>
      <h2 className='text-xl mb-6 uppercase font-semibold word'>About Me</h2>
      <div className='flex flex-col-reverse lg:flex-row gap-8'>
        <div className='mx-auto w-full md:mx-0 lg:w-2/3'>
          <p className='text-gray-300'>
            I'm Raphael a Frontend web developer and aspiring Full-stack
            developer. I am currently learning backend engineering{' '}
            <span className='text-primary'>
              with NodeJS, Express, Mongoose and MongoDB
            </span>
            .
            <br /> <br /> I recently graduated National Diploma (ND) from the
            department of Computer Science and Information Technology (CSIT) in
            Petroleum Training Institute, Effurun (PTI).
            <br /> <br />
            With my 2 years+ of experience in web development I have been
            actively learning and building projects. I am committed to continous
            learning and passionate about building fully functional and
            responsive web apps. I transform your vision into dynamic digital
            experiences by ensuring that every project is not just complete but
            close to perfection.
            <br /> <br />
            When I'm not Coding I'm either reading blogs, listening to music or
            reading books. I'm also interested in Cross-platform app Development
            and blogging (although I've not tried it).
            <br /> <br />
            Let's explore the future of technology together. One line of code at
            a time.
            <br /> <br />
          </p>
          <div className='rounded-lg p-2 hover:scale-[1.01] transition-transform ease-out duration-100 ring-1 ring-primary w-[70%]'>
            Here are <span className='text-primary'>some </span> technologies
            I've worked with recently:
            <br />
            <br />
            <ul className='grid grid-cols-2 '>
              {[
                'HTML',
                'SASS',
                'CSS',
                'Tailwind Css',
                'JavaScript',
                'Framer Motion',
                'React',
                'Git & GitHub',
                'NextJS',
                'Firebase',
              ].map((tech) => {
                return (
                  <li key={tech}>
                    {' '}
                    <TbCodeCircle className='inline align-middle' /> {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          className='rounded-lg inline-block h-auto relative md:h-[500px] lg:h-[425px] object-cover'
          src={Pic}
          alt=''
        />
      </div>
      <marquee
        behavior='scroll'
        direction='left'
        scrollamount='30'
        className='bg-[#00ddff27] mt-8 px-4 py-6'>
        <div className='[&_img]:size-32 flex gap-6 items-center w-max overflow-x-visible '>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fedora/fedora-plain.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg' />

          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' />
        </div>
      </marquee>
    </section>
  );
};

export default About;
