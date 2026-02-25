import React from 'react';
import { Linkedin, Github, Twitter, Globe, Heart, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-black-100 border-t border-t-[#1f1f3a] px-6 sm:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-secondary text-[14px] font-medium">
                 {/* Logo Icon mini */}
                 <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-bold text-white text-xs">M</span>
                 </div>
                 <p className="flex items-center gap-1">
                     &copy; 2026 Développé avec <Heart size={14} className="text-pink-500 fill-pink-500" /> par Ousseini KABORE | Le-Programmeur
                 </p>
            </div>
            
            <div className="flex gap-6">
                <a target="_blank" href="https://www.linkedin.com/in/ousseini-kabor%C3%A9-7b4226155/" className="text-secondary hover:text-white transition-colors duration-300 transform hover:-translate-y-1"><Linkedin size={22} /></a>
                <a target="_blank" href="https://github.com/Almighty2?tab=repositories" className="text-secondary hover:text-white transition-colors duration-300 transform hover:-translate-y-1"><Github size={22} /></a>
                <a target="_blank" href="https://x.com/Almighty_Kabore" className="text-secondary hover:text-white transition-colors duration-300 transform hover:-translate-y-1"><Twitter size={22} /></a>
                <a target="_blank" href="https://www.youtube.com/@ecole-du-programmeur" className="text-secondary hover:text-white transition-colors duration-300 transform hover:-translate-y-1"><Youtube size={22} /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
