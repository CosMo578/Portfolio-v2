import ProjectCard from './ProjectCard';
import { projectData } from '../constants';

const Projects = () => {
  return (
    <section className='mb-20'>
      <h2 className='text-xl mb-6 uppercase font-semibold'>
        Some Things I've Built
      </h2>
      <div id='parent-container' className='flex flex-col gap-12'>
        {projectData.map((data) => (
          <ProjectCard {...data} key={data.name} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
