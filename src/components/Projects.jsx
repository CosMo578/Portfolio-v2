import { TbArrowUpRight } from 'react-icons/tb';
import Img1 from '../assets/Weather-Web-App.png';
import Img2 from '../assets/URL-Shortener.png';
import Img3 from '../assets/Countries-Search.png';

const Projects = () => {
  const projectData = [
    {
      name: 'Weather Forecast',
      url: 'https://',
      image: Img1,
      alt: 'Image was unable to be loaded',
      description:
        'A Web App that shows the weather forecast based on your current location. It allows you to search for other cities weather forecast. It shows a 5 days forecast by default.',
      technologies: ['React', 'Tailwind Css', 'Framer Motion', 'API'],
    },
    {
      name: 'URL Shortener',
      url: 'https://shortly-url-shortener-raph.vercel.app',
      image: Img2,
      alt: 'Image was unable to be loaded',
      description:
        "A web app for shortening long urls. It has feature to copy generated short links, it stores your shortened url so you don't lose them on page reload, and allows you clear all shortened urls.",
      technologies: ['HTML', 'Sass', 'JavaScript', 'API'],
    },
    {
      name: 'Search Countries',
      url: 'https://',
      image: Img3,
      alt: 'Image was unable to be loaded',
      description:
        'An API based web app which allows you to search for countries around the world with live searching feature. It has other features like filtering countries based on the region, you can also checking more details about individual country.',
      technologies: ['React', 'Tailwind Css', 'Framer Motion', 'API'],
    },
    {
      name: 'Styled By Stella',
      url: 'https://styled-by-stella.vercel.app',
      image: '',
      alt: 'Image was unable to be loaded',
      description:
        'A business landing page website for a hair styling brand that showcases services offered, contact info and opening hours.',
      technologies: ['HTML', 'Sass', 'JavaScript'],
    },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-xl mb-6 uppercase font-semibold">
        Some Things I've Built
      </h2>
      <div id="parent-container" className="flex flex-col gap-12">
        {projectData.map(({ name, url, image, alt, description, technologies }) => {
          return (
            <div
              key={name}
              id="child"
              className="flex flex-col md:even:flex-row-reverse md:[&_ul]:even:ml-0 md:[&_h3]:even:text-left md:[&_p]:even:text-left md:flex-row p-4 md:p-8 gap-5 rounded-xl hover:scale-[1.01] transition-transform ease-out duration-100 ring-1 ring-primary">
              <img
                className="w-full md:w-1/2 h-auto bg-slate-600 rounded-lg"
                src={image}
                alt={alt}
              />

              <div className="flex md:text-right flex-col justify-center md:w-1/2">
                <a href={url} target="_blank" rel="noreferrer">
                  <h3 className="text-xl md:text-2xl leading-loose mb-4 hover:text-primary">
                    {name} <TbArrowUpRight className="inline" />
                  </h3>
                </a>
                <p className="text-gray-400 mb-4">{description}</p>
                <ul className="text-primary md:ml-auto text-center flex gap-2 flex-wrap">
                  {technologies.map((technology) => {
                    return (
                      <li
                        key={technology}
                        className="bg-[#00ddff27] select-none rounded-3xl flex items-center justify-center px-4 py-1">
                        {technology}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
