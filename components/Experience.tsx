import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Mes Compétences
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-16">
          Expériences.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
           {/* Vertical Line */}
           <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[3px] bg-white/20 -ml-[1.5px]" />
           
           {experiences.map((experience, index) => {
               const isEven = index % 2 === 0;
               return (
                   <div key={index} className={`relative flex items-center justify-between mb-8 md:mb-12 
                        ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}
                   `}>
                       {/* Spacer for Desktop Balance */}
                       <div className="hidden md:block w-[calc(50%-30px)]" />

                       {/* Icon Bubble */}
                       <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#1d1836] shadow-lg z-10"
                            style={{ backgroundColor: experience.iconBg }}
                       >
                           <div className="w-[60%] h-[60%] flex items-center justify-center">
                               {experience.icon}
                           </div>
                       </div>

                       {/* Content Card */}
                       <motion.div 
                          initial={{ opacity: 0, x: 0, y: 50 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className={`w-[calc(100%-60px)] md:w-[calc(50%-50px)] bg-[#1d1836] p-6 rounded-2xl border-b-4 border-accent shadow-card
                             ml-auto md:ml-0
                          `}
                       >
                            <div className="relative">
                                {/* Desktop Arrow pointer */}
                                <div className={`absolute top-5 w-0 h-0 border-y-[10px] border-y-transparent
                                    md:block hidden
                                    ${isEven 
                                        ? 'right-[-25px] border-l-[15px] border-l-[#1d1836]' 
                                        : 'left-[-25px] border-r-[15px] border-r-[#1d1836]'}
                                `} />
                                
                                {/* Mobile Arrow pointer (always left) */}
                                <div className="absolute top-5 left-[-25px] w-0 h-0 border-y-[10px] border-y-transparent border-r-[15px] border-r-[#1d1836] md:hidden block" />

                                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                                <p className="text-secondary text-[16px] font-bold m-0">{experience.company_name}</p>
                                
                                <ul className="mt-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, i) => (
                                        <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-secondary mt-4 text-right">{experience.date}</p>
                            </div>
                       </motion.div>
                   </div>
               );
           })}
      </div>

    </section>
  );
};

export default Experience;