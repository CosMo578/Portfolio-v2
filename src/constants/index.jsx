import Img1 from '/images/Weather-Web-App.png';
import Img2 from '/images/URL-Shortener.png';
import Img3 from '/images/Rest-Countries-API-2.png';
import Img4 from '/images/Blogr-landing-page.png';
import Img5 from '/images/Crowdfunding-product-page.png';
import Img6 from '/images/Easybank-landing-page-2.png';
import Img7 from '/images/IP-address-tracker.png';
import Img8 from '/images/Vorem-academy.png';
import Img9 from '/images/Rock-Paper-Scissor.png';
import Img10 from '/images/Tazkora.png';
import {
  TbBrandGithub,
  // TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandX,
  TbPhone,
} from 'react-icons/tb';

export const projectData = [
  {
    name: 'Tazkora',
    url: 'https://tazkora.netlify.app',
    image: Img10,
    description:
      'I collaborated with a team of UI UX designers, Backend Develper and Frontend Developer to build this full-stack web app tailored for businesses to generate engagements on their social media accounts by creating tasks for users to complete and get paid',
    technologies: ['NextJS', 'React', 'Tailwind CSS', 'Framer Motion', 'API'],
  },
  // {
  //   name: 'Trix',
  //   url: 'https://trix.vercel.app',
  //   image: Img7,
  //   description:
  //     "An fully interactive and responsive IP address tracker website that automatically detects and displays a user's IP, location, ISP and timezone. Users can also input other IP to view details on an interactive map with pinpoint accuracy.",
  //   technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'API'],
  // },
  {
    name: 'Rock Paper Scissors Game',
    url: 'https://ralph-fm-rock-paper-scissors.vercel.app/',
    image: Img9,
    description: '',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'IP Address Tracker',
    url: 'https://ralph-ip-address-tracker.vercel.app',
    image: Img7,
    description:
      "An fully interactive and responsive IP address tracker website that automatically detects and displays a user's IP, location, ISP and timezone. Users can also input other IP to view details on an interactive map with pinpoint accuracy.",
    technologies: ['React', 'Tailwind CSS', 'Axios', 'Leaflet', 'API'],
  },
  {
    name: 'Vorem Academy',
    url: 'https://vorem-academy.vercel.app',
    image: Img8,
    description:
      'A multi-page bootcamp-like website that is fully responsive and interactive that showcases the available courses offered and bootcamps to join. It encompases other pages like course details, contact page, and about vorem academy etc.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'Countries Search',
    url: 'https://countries-search-omega.vercel.app',
    image: Img3,
    description:
      "A multi-page API based web app that searches for countries around the world with live filtering feature based on the country's region, and details page about individual country.",
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'API'],
  },
  {
    name: 'Weather Forecast Website',
    url: 'https://weather-app-raph.vercel.app',
    image: Img1,
    description:
      'A web app I built using the geolocation API for getting the users longtitude and latitude coordinates then displaying the weather forecast for the 5 upcoming days. The user can also search for cities to get the weather forcast',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'API'],
  },

  {
    name: 'Shortly URL Shortener',
    url: 'https://shortly-url-shortener-raph.vercel.app',
    image: Img2,
    description:
      'A web app for shortening long links, the user can to copy generated shortened link. It stores a list of previously shortened links and persist them on page reload.',
    technologies: ['HTML', 'SASS', 'JavaScript', 'API'],
  },
  {
    name: 'Blogr landing page',
    url: 'https://blogr-landing-page-raph.vercel.app',
    image: Img4,
    description:
      'A mobile-responsive landing page built to help improve my skills building mobile responsive webpage using react and tailwindcss',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'EasyBank landing page',
    url: 'https://easybank-landing-page-raph.vercel.app',
    image: Img6,
    description:
      'A mobile-responsive and animated landing page built to help improve my skills building mobile responsive webpage using react and tailwindcss',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
  },
  // {
  //   name: 'Crowdfund product page',
  //   url: 'https://crowdfunding-product-raph.vercel.app',
  //   image: Img5,
  //   description:
  //     'This is a solution to the Crowdfunding product page challenge on Frontend Mentor, to help me improve my coding skills by building realistic projects. ',
  //   technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  // },

  // {
  //   name: 'Styled By Stella',
  //   url: 'https://styled-by-stella.vercel.app',
  //   image: '',
  //   alt: 'Image was unable to be loaded',
  //   description:
  //     'A business landing page website for a hair styling brand that showcases services offered, contact info and opening hours.',
  //   technologies: ['HTML', 'SASS', 'JavaScript'],
  // },
];

export const socialLinks = [
  {
    href: 'tel:+2347048765760',
    icon: <TbPhone className='text-3xl' />,
  },
  {
    href: 'https://wa.me/message/DSHSUDWID3VVA1',
    icon: <TbBrandWhatsapp className='text-3xl' />,
  },
  {
    href: 'https://twitter.com/@dev_ralph_',
    icon: <TbBrandX className='text-3xl' />,
  },
  // {
  //   href: 'https://instagram.com/developer_raphael',
  //   icon: <TbBrandInstagram className='text-3xl' />,
  // },
  {
    href: 'https://www.linkedin.com/in/raphael-akpor-a69812273',
    icon: <TbBrandLinkedin className='text-3xl' />,
  },
  {
    href: 'https://github.com/cosmo578',
    icon: <TbBrandGithub className='text-3xl' />,
  },
];
