import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#1F1E24] text-zinc-200 px-[10%] py-[5%]">
            <motion.h1 
                className="text-4xl font-bold mb-6 text-[#6556CD]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About MOVIE.
            </motion.h1>
            <motion.p
                className="text-lg leading-7 max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Welcome to <span className="text-[#6556CD] font-semibold">MOVIE FINDER.</span> — your one-stop platform to explore trending films, popular TV shows, and the latest entertainment news.
                We aim to provide a modern, seamless, and immersive user experience using powerful APIs and a beautiful UI.
            </motion.p>

            <motion.img 
                src="/movie.jpg" 
                alt="About Visual"
                className="w-[60%] mt-10 rounded-2xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            />
        </div>
    );
};

export default About;
