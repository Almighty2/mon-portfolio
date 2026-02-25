import React from 'react';
import { motion } from 'framer-motion';
import { techIcons } from '../constants';
import BackgroundWaves from './BackgroundWaves';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center overflow-hidden">
      <BackgroundWaves />
      
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5 z-10 pointer-events-none">
        {/* Purple vertical line decoration */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Content */}
        <div className="pointer-events-auto z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            Je suis <span className="text-[#915eff]">Ousseini Kaboré</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 max-w-2xl"
          >
            Développeur Full stack (Web, Mobile & Blockchain) <br className="sm:block hidden" />
            Spécialisé en React, NestJS, PHP et Angular.
          </motion.p>
        </div>
      </div>

      {/* Floating Icons (Right Side) */}
      <div className="absolute right-4 top-1/4 flex flex-col gap-6 z-20 pointer-events-auto sm:right-10 lg:right-20">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/10 ${tech.color} backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 shadow-[0_0_20px_rgba(145,94,255,0.15)]`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
                duration: 0.8, 
                delay: 0.5 + (index * 0.2),
                y: {
                    repeat: Infinity,
                    duration: 2 + index,
                    ease: "easeInOut"
                }
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Center 3D Desk Simulation */}
      <div className="absolute bottom-0 w-full h-[60%] sm:h-[70%] z-0 flex items-end justify-center pointer-events-none">
          {/* This represents the 3D desk. In a real app this would be a Canvas. Here we use a styled composition. */}
          <div className="relative w-full max-w-5xl h-full flex items-end justify-center">
             
             {/* Reflection/Shadow on desk */}
             <div className="absolute bottom-[5%] w-[80%] h-[100px] bg-black/50 blur-xl rounded-[100%]" />

             {/* Computer Image - Using a high quality placeholder that matches the vibe */}
             {/* We use a motion div to give it a slight floating/breathing effect like in 3D */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-video mb-12 sm:mb-20"
             >
                {/* 
                  Since we cannot load external GLTF models without ensuring the URL is persistent,
                  we will simulate the screen shown in the prompt using HTML/CSS inside a perspective container
                  to look like a monitor, or use an image if that fails. 
                  
                  Let's use a very specific image that looks like a 3D desk render.
                */}
                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                    alt="Developer Desk Setup" 
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-90 mask-image-gradient"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                />
                
                {/* Overlay Code Editor Mockup to make it look exactly like the portfolio "Code Screen" */}
                <div className="absolute top-[10%] left-[15%] right-[15%] bottom-[25%] bg-[#1e1e1e]/90 rounded-md border border-gray-700 overflow-hidden hidden sm:flex flex-col shadow-2xl transform perspective-1000 rotate-x-2">
                    {/* Title Bar */}
                    <div className="h-6 bg-[#252526] flex items-center px-2 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                        <span className="ml-2 text-[10px] text-gray-400 font-mono">App.tsx - Visual Studio Code</span>
                    </div>
                    {/* Code Content */}
                    <div className="flex-1 p-3 font-mono text-[10px] md:text-xs text-gray-300 leading-relaxed overflow-hidden opacity-80">
                         <div className="flex"><span className="text-purple-400 w-6">1</span> <span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-orange-300">'react'</span>;</div>
                         <div className="flex"><span className="text-purple-400 w-6">2</span> <span className="text-blue-400">import</span> &#123; Canvas &#125; <span className="text-blue-400">from</span> <span className="text-orange-300">'@react-three/fiber'</span>;</div>
                         <div className="flex"><span className="text-purple-400 w-6">3</span> </div>
                         <div className="flex"><span className="text-purple-400 w-6">4</span> <span className="text-blue-400">const</span> <span className="text-yellow-300">Portfolio</span> = () =&gt; &#123;</div>
                         <div className="flex"><span className="text-purple-400 w-6">5</span> &nbsp;&nbsp;<span className="text-blue-400">return</span> (</div>
                         <div className="flex"><span className="text-purple-400 w-6">6</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-orange-300">"hero-container"</span>&gt;</div>
                         <div className="flex"><span className="text-purple-400 w-6">7</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-300">Header</span> /&gt;</div>
                         <div className="flex"><span className="text-purple-400 w-6">8</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-300">Hero3D</span> /&gt;</div>
                         <div className="flex"><span className="text-purple-400 w-6">9</span> &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-green-400">div</span>&gt;</div>
                         <div className="flex"><span className="text-purple-400 w-6">10</span> &nbsp;&nbsp;);</div>
                         <div className="flex"><span className="text-purple-400 w-6">11</span> &#125;;</div>
                    </div>
                </div>

             </motion.div>
          </div>
      </div>

      {/* Scroll Mouse Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;