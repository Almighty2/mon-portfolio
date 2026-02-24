import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { Github } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<Project & { index: number }> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer transition-transform hover:-translate-y-2 duration-300 h-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 hover:bg-black transition-colors"
            >
              <Github className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-6">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Mes réalisations
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Projets.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Les projets suivants mettent en avant mes compétences et mon expérience à travers des exemples concrets de mon travail. 
          Chaque projet est brièvement décrit avec des liens vers les dépôts de code ou des démonstrations en direct. 
          Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer les projets efficacement.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;