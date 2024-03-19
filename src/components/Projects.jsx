import { TbArrowUpRight } from 'react-icons/tb';
import Img1 from '../assets/Weather-Web-App.png';
import Img2 from '../assets/URL-Shortener.png';
import Img3 from '../assets/Countries-Search.png';
import Img4 from '../assets/Blogr-landing-page.png';
import Img5 from '../assets/Crowdfunding-product-page.png';

const Projects = () => {
  const projectData = [
    {
      name: 'Countries Search',
      url: 'https://countries-search-omega.vercel.app',
      image: Img3,
      alt: 'Image was unable to be loaded',
      description:
        "A multi-page API based web app that live searches for countries around the world with filtering feature based on the country's region, and details page about individual country.",
      technologies: ['React', 'Tailwind Css', 'Framer Motion', 'API'],
    },
    {
      name: 'Shortly URL Shortener',
      url: 'https://shortly-url-shortener-raph.vercel.app',
      image: Img2,
      alt: 'Image was unable to be loaded',
      description:
        "A web app for shortening long URL, the user is able to copy generated shortened URLs, cache all shortened URLs and don't lose them on page reload and clear all shortened URLs.",
      technologies: ['HTML', 'Sass', 'JavaScript', 'API'],
    },
    {
      name: 'EasyBank landing page',
      url: 'https://easybank-landing-page-raph.vercel.app',
      image: null,
      alt: 'Image was unable to be loaded',
      description:
        'This is a solution to the EasyBank landing page challenge on Frontend Mentor, to help me improve my coding skills by building realistic projects.',
      technologies: ['HTML', 'Tailwind', 'JavaScript'],
    },
    {
      name: 'Blogr landing page',
      url: 'https://blogr-landing-page-raph.vercel.app',
      image: Img4,
      alt: 'Image was unable to be loaded',
      description:
        'This is a solution to the Blogr landing page challenge on Frontend Mentor, to help me improve my coding skills by building realistic projects.',
      technologies: ['React', 'Tailwind Css', 'Landing page'],
    },
    {
      name: 'Crowdfund product page',
      url: 'https://crowdfunding-product-raph.vercel.app',
      image: Img5,
      alt: 'Image was unable to be loaded',
      description:
        'This is a solution to the Crowdfunding product page challenge on Frontend Mentor, to help me improve my coding skills by building realistic projects. ',
      technologies: ['React', 'Tailwind Css', 'Landing page'],
    },
    {
      name: 'Weather Forecast Web App',
      url: 'https://',
      image: Img1,
      alt: 'Image was unable to be loaded',
      description:
        'A Web App that shows the weather forecast based on your current location. It allows you to search for other cities weather forecast. It shows a 5 days forecast by default.',
      technologies: ['React', 'Tailwind Css', 'Framer Motion', 'API'],
    },
    // {
    //   name: 'Styled By Stella',
    //   url: 'https://styled-by-stella.vercel.app',
    //   image: '',
    //   alt: 'Image was unable to be loaded',
    //   description:
    //     'A business landing page website for a hair styling brand that showcases services offered, contact info and opening hours.',
    //   technologies: ['HTML', 'Sass', 'JavaScript'],
    // },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-xl mb-6 uppercase font-semibold">
        Some Things I've Built
      </h2>
      <div id="parent-container" className="flex flex-col gap-12">
        {projectData.map(
          ({ name, url, image, alt, description, technologies }) => {
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
                    <h3 className="text-xl md:text-2xl [&_.arrow]:hover:animate-bounce leading-loose mb-4 hover:text-primary">
                      {name} <TbArrowUpRight className="inline arrow" />
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
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
