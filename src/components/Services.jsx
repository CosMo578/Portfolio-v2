// import { TbArrowUpRight } from 'react-icons/tb';

const Services = () => {
  return (
    <section className="mb-20">
      <h2 className="text-xl mb-6 uppercase font-semibold">
        Some Services I Offer
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-start flex-wrap justify-start flex-col gap-4">
          <img
            className="w-full h-auto rounded-xl"
            src="./public/assets/Development-cuate.svg"
            alt="Image was unable to be loaded"
          />
          <h2 className="text-xl mb-6 font-semibold ">Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusantium impedit molestiae aspernatur doloribus, iusto maxime
            incidunt consequatur quas totam suscipit autem, ex saepe, magni
            harum aperiam eum corrupti. Quo?
          </p>
        </div>
        <div className="flex items-start flex-wrap justify-start flex-col gap-4">
          <img
            className="w-full h-auto  rounded-xl"
            src="./public/assets/Cloud hosting-cuate.svg"
            alt="Image was unable to be loaded"
          />
          <h2 className="text-xl mb-6 font-semibold ">Web Hosting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusantium impedit molestiae aspernatur doloribus, iusto maxime
            incidunt consequatur quas totam suscipit autem, ex saepe, magni
            harum aperiam eum corrupti. Quo?
          </p>
        </div>
        <div className="flex items-start flex-wrap justify-start flex-col gap-4">
          <img
            className="w-full h-auto  rounded-xl"
            src="public\assets\File searching-amico.svg"
            alt="Image was unable to be loaded"
          />
          <h2 className="text-xl mb-6 font-semibold ">
            Google Business Registration
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusantium impedit molestiae aspernatur doloribus, iusto maxime
            incidunt consequatur quas totam suscipit autem, ex saepe, magni
            harum aperiam eum corrupti. Quo?
          </p>
        </div>
        <div className="flex items-start flex-wrap justify-start flex-col gap-4">
          <img
            className="w-full h-auto  rounded-xl"
            src="public\assets\SEO team.svg"
            alt="Image was unable to be loaded"
          />
          <h2 className="text-xl mb-6 font-semibold ">SEO</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            accusantium impedit molestiae aspernatur doloribus, iusto maxime
            incidunt consequatur quas totam suscipit autem, ex saepe, magni
            harum aperiam eum corrupti. Quo?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
