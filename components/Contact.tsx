import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      alert("Merci. Je vous recontacterai dès que possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, type: "spring", stiffness: 100 }}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl relative z-10'
        >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Entrez en contact</p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contactez-nous.</h3>

            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-6'
            >
            <label className='flex flex-col group'>
                <span className='text-white font-medium mb-2 group-focus-within:text-[#915eff] transition-colors'>Votre nom</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Comment vous appelez-vous ?"
                className='bg-[#100d25] py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium focus:border-[#915eff] focus:bg-[#050816] transition-all shadow-sm'
                />
            </label>
            <label className='flex flex-col group'>
                <span className='text-white font-medium mb-2 group-focus-within:text-[#915eff] transition-colors'>Votre adresse e-mail</span>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Quelle est votre adresse e-mail ?"
                className='bg-[#100d25] py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium focus:border-[#915eff] focus:bg-[#050816] transition-all shadow-sm'
                />
            </label>
            <label className='flex flex-col group'>
                <span className='text-white font-medium mb-2 group-focus-within:text-[#915eff] transition-colors'>Votre message</span>
                <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Que voulez-vous dire ?'
                className='bg-[#100d25] py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium resize-none focus:border-[#915eff] focus:bg-[#050816] transition-all shadow-sm'
                />
            </label>

            <button
                type='submit'
                className='bg-gradient-to-r from-[#915eff] to-[#804dee] mt-2 py-4 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-[0_0_20px_rgba(145,94,255,0.3)] hover:shadow-[0_0_30px_rgba(145,94,255,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3'
            >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
                {!loading && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                )}
            </button>
            </form>
        </motion.div>

        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, type: "spring", stiffness: 100 }}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center relative'
        >
            {/* Simple CSS Stars Background for this section specifically */}
            <div className="absolute inset-0 z-0">
                 <div className="absolute top-10 right-10 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
                 <div className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s'}} />
                 <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
            </div>

            {/* Stylized Planet Image to match the reference */}
            <div className="w-full h-full flex items-center justify-center relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1614730341194-75c60740a2d3?q=80&w=2940&auto=format&fit=crop"
                    alt="3D Planet"
                    className="w-[80%] h-[80%] object-contain opacity-90 drop-shadow-[0_0_80px_rgba(145,94,255,0.4)] mix-blend-screen hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ filter: "hue-rotate(240deg) contrast(1.2)" }} 
                />
            </div>
        </motion.div>
        </div>
    </section>
  );
};

export default Contact;
