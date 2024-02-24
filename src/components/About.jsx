import { TbCodeCircle } from 'react-icons/tb';
import Pic from '../assets/Raph.jpg';
const About = () => {
  return (
    <section className="mb-20">
      <h2 className="text-xl mb-6 uppercase font-semibold word">About Me</h2>
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="mx-auto w-full md:mx-0 lg:w-2/3">
          <p className="text-gray-300 capitalize">
            Hello! I'm Akpor Raphael, a
            <span className="text-primary">
              {' '}
              frontend web developer
              <span className="text-gray-300">,</span> freelancer{' '}
              <span className="text-gray-300 ">and</span> student{' '}
            </span>
            that's committed to continous learning. I am passionate about
            building optimized websites for businesses.
            <br />
            <br />
            I’m a Developer with 1 year of experience. I transform your vision
            into dynamic digital experiences by ensuring that every project is
            not just complete but close to perfection.
            <br />
            <br />
            When I'm not at the computer I'm either listening to music, watching
            movies or reading blogs. I'm also intrested in UI design, Cross-platform App Development and blogging.
            <br />
            <br />
            Let's explore the future of technology together. One line of code at
            a time.
            <br />
            <br />
          </p>
          <div className="rounded-lg p-2 hover:scale-[1.01] transition-transform ease-out duration-100 ring-1 ring-primary">
            Here are <span className='text-primary'>some </span> technologies I've worked with recently:
            <br />
            <br />
            <ul className="grid grid-cols-2 ">
              {[
                'HTML',
                'ReactJS',
                'CSS',
                'Tailwind Css',
                'SASS',
                'Framer Motion',
                'JavaScript',
                'Git & GitHub',
              ].map((tech) => {
                return (
                  <li key={tech}>
                    {' '}
                    <TbCodeCircle className="inline align-middle" /> {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          className="rounded-lg inline-block h-auto relative md:h-[500px] lg:h-[425px] object-cover"
          src={Pic}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
