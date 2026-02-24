import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { Service } from '../types';

// Simple Tilt Component using Framer Motion
const TiltCard = ({ children, index }: { children?: React.ReactNode; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      className="w-full"
    >
        {children}
    </motion.div>
  );
};

const ServiceCard: React.FC<{ index: number; title: string; icon: React.ReactNode }> = ({ index, title, icon }) => (
  <TiltCard index={index}>
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer">
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="w-16 h-16 object-contain flex items-center justify-center">
             {icon}
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </TiltCard>
);

const About: React.FC = () => {
  return (
    <section id="about" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Vue d'ensemble.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 1 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Développeur Full stack passionné avec plus de 3 ans d'expérience dans la conception, le développement et la maintenance de solutions logicielles robustes et évolutives. Titulaire d'un Master 2 en Blockchain et d'une Licence en Développement d'Applications. Maîtrisant des technologies telles que React, Next.js, Angular, NestJS, PHP et Solidity. Je possède également une forte appétence pour l'exploitation, la sécurité des données et la digitalisation des processus métiers.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <div key={service.title} className="w-[250px]">
            <ServiceCard index={index} {...service} />
          </div>
        ))}
      </div>
      
      {/* CSS for specific gradient needed here if not in global */}
      <style>{`
        .green-pink-gradient {
          background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
        }
        .shadow-card {
           box-shadow: -1px 3px 20px -3px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
};

export default About;