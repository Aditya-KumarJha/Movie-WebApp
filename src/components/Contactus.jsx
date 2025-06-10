import React from 'react';
import { FaPhoneAlt, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#1F1E24] text-zinc-200 px-[5%] py-[5%] flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-[#6556CD]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-lg leading-7 text-center max-w-3xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Got feedback, ideas, or need help? Drop us a message or reach us through our socials!
      </motion.p>

      <motion.div 
        className="w-full max-w-4xl bg-[#2A2933] p-8 rounded-xl shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 bg-[#1F1E24] rounded-lg text-white border border-zinc-700 col-span-1 md:col-span-2"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 bg-[#1F1E24] rounded-lg text-white border border-zinc-700 col-span-1 md:col-span-2"
          />
          <textarea 
            rows="5" 
            placeholder="Your Message" 
            className="p-3 bg-[#1F1E24] rounded-lg text-white border border-zinc-700 col-span-1 md:col-span-2"
          />
          <button 
            type="submit"
            className="bg-[#6556CD] hover:bg-[#7a6dff] text-white py-3 px-6 rounded-lg transition-all col-span-1 md:col-span-2"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 border-t border-zinc-600 pt-4">
          <h2 className="text-lg font-semibold mb-3">Connect with us</h2>
          <div className="flex gap-6 text-2xl">
            <a href="tel:+911234567890" className="hover:text-[#6556CD]"><FaPhoneAlt /></a>
            <a href="https://www.instagram.com/heyadityajha?igsh=bzVuNXllN2hscW9s" target="_blank" rel="noreferrer" className="hover:text-[#6556CD]"><FaInstagram /></a>
            <a href="https://x.com/aditya_jha_12?t=kXSXPX7TuNQeLEbOsLyzmA&s=08" target="_blank" rel="noreferrer" className="hover:text-[#6556CD]"><FaTwitter /></a>
            <a href="https://github.com/Aditya-KumarJha" target="_blank" rel="noreferrer" className="hover:text-[#6556CD]"><FaGithub /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
