import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";

// This simulates the "BallCanvas" look from the reference using CSS
const TechBall = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <div className="w-28 h-28 relative flex items-center justify-center group cursor-pointer">
       {/* 
         The "Polyhedron" shape simulation.
         We create a faceted look using a background gradient and a clip path.
       */}
       <div 
         className="absolute inset-0 bg-[#fff8eb] transition-transform duration-500 ease-out group-hover:scale-110"
         style={{
            clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)", // Hexagon/Polygon shape
            background: "linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #d4d4d4 100%)",
            boxShadow: "inset -5px -5px 20px rgba(0,0,0,0.2), inset 5px 5px 20px rgba(255,255,255,0.8)"
         }}
       >
         {/* Inner shading for more 3D depth */}
         <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-black/10" />
       </div>

       {/* Icon */}
       <div className="relative z-10 w-1/2 h-1/2 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          {icon}
       </div>
       
       {/* Tooltip Name */}
       <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs py-1 px-2 rounded">
         {name}
       </div>
    </div>
  );
};

const Tech: React.FC = () => {
  return (
    <section className="py-10 flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto px-6 sm:px-16">
      {technologies.map((technology) => (
        <motion.div
           key={technology.name}
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
        >
             <TechBall icon={technology.icon} name={technology.name} />
        </motion.div>
      ))}
    </section>
  );
};

export default Tech;
