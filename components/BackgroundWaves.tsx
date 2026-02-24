import React from 'react';

const BackgroundWaves: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
       {/* Left Glow */}
       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
       
       {/* Right Glow */}
       <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]" />

       {/* Wave SVG Representation */}
       <svg className="absolute top-0 right-0 h-screen w-auto opacity-30" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M250 0 C 350 200, 150 200, 250 400 C 350 600, 150 600, 250 800" stroke="url(#grad1)" strokeWidth="2" fill="none" />
         <path d="M280 0 C 380 200, 180 200, 280 400 C 380 600, 180 600, 280 800" stroke="url(#grad1)" strokeWidth="2" fill="none" />
         <path d="M220 0 C 320 200, 120 200, 220 400 C 320 600, 120 600, 220 800" stroke="url(#grad1)" strokeWidth="2" fill="none" />
         <path d="M100 0 Q 300 200 100 400 T 100 800" stroke="url(#grad2)" strokeWidth="1" strokeDasharray="5 5" />
         <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#915eff', stopOpacity:0}} />
              <stop offset="50%" style={{stopColor:'#915eff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#915eff', stopOpacity:0}} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:0.5}} />
            </linearGradient>
         </defs>
       </svg>
       
       {/* Left Wave */}
        <svg className="absolute top-1/3 left-0 h-[60vh] w-auto opacity-20 transform -scale-x-100" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M250 0 C 350 200, 150 200, 250 400 C 350 600, 150 600, 250 800" stroke="#915eff" strokeWidth="2" fill="none" />
       </svg>
    </div>
  );
};

export default BackgroundWaves;