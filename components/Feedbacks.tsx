import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import { Testimonial } from '../types';

const FeedbackCard: React.FC<Testimonial & { index: number }> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      
      <div className='mt-3'>
        <a href="#" className="text-blue-400 text-[14px] hover:underline">Lire Plus</a>
      </div>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-blue-500'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks: React.FC = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] max-w-7xl mx-auto'>
      <div className='bg-tertiary rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10'>
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Les retours clients</p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Témoignages.</h2>
        </motion.div>
      </div>
      <div className='-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7 justify-center'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
