import {
  TbBrandGithub,
  // TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandX,
  TbPhone,
} from 'react-icons/tb';

const Hero = () => {
  const socialLinks = [
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
  return (
    <main className='mb-32 pb-3'>
      <h1 className='text-3xl md:text-4xl font-bold leading-relaxed'>
        Akpor Raphael
        <br />
        <span className='block text-3xl text-gray-400 md:w-4/5'>
          Get The Best Web Experience From Me.
        </span>
      </h1>
      <p className='my-4 text-gray-300 md:w-4/6 lg:w-1/2 capitalize'>
        I build blazingly fast frontend web apps with stunning UI, user friendly
        experience and best practices for search engine optimization.
        <br />
        <br />
        With passion for cutting-edge technologies and a commitment to clean,
        efficient code, I'm here to turn your ideas into reality. Lets's build
        something together 👇
      </p>

      <div className='flex lg:items-center md:gap-16 gap-10 lg:justify-start justify-between flex-wrap flex-col lg:flex-row'>
        <ul className='flex space-x-4'>
          {socialLinks.map((social) => {
            return (
              <li
                key={social.href}
                className='hover:text-primary hover:cursor-pointer hover:rounded-full hover:scale-[1.3] transition-all duration-200 ease-in-out p-1'>
                <a href={social.href} target='_blank' rel='noopener noreferrer'>
                  {social.icon}
                </a>
              </li>
            );
          })}
        </ul>

        <button className='px-6 py-3 rounded-md ring-2 ring-primary duration-200 transition-colors ease-in-out bg-primary font-semibold hover:bg-transparent hover:text-primary'>
          <a
            href='https://drive.google.com/file/d/1w4YgfMYXl81O7AA4MSWJFwbDy9OwTp6s/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'>
            Download my CV
          </a>
        </button>
      </div>
    </main>
  );
};

export default Hero;
