import React from 'react';
import { motion } from 'framer-motion';

function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-24 bg-neutral-950 pattern-boxes">
            <header className="text-center mb-10 px-4">
                <motion.h2
                    className="text-xl sm:text-3xl font-thin text-white"
                    initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5 }}
                >
                    Hi <span className="wave">👋</span>, I'm Justin Parlan
                </motion.h2>
                <motion.h2
                    className="text-5xl sm:text-7xl font-bold text-white mt-2"
                    initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.5 }}
                >
                      <span className="text-gradient">Front-End Developer</span>
                </motion.h2>
                <motion.h3
                    className="text-sm sm:text-xl font-thin text-white pt-2 leading-relaxed"
                    initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.5 }}
                >
                    from Philippines📍, currently taking BS Information Technology💻
                </motion.h3>
            </header>

            <div className="flex flex-row items-center space-x-4 text-xl mb-24">
                <motion.a 
                    href="/" 
                    className="flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-white text-black rounded-full hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.7 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                        <path fill="black" fillRule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
                    </svg>
                    Resume
                </motion.a>
                <motion.a 
                    href="mailto:justinparlan123@gmail.com" 
                    className="flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-neutral-600 text-white rounded-full hover:bg-green-600 transition duration-300 text-sm sm:text-base"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.8 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14" className="mr-2">
                        <path fill="white" fillRule="evenodd" d="M11.132.063H3.046A2.178 2.178 0 0 0 .869 2.18v9.574a2.177 2.177 0 0 0 2.177 2.175h9.037a.75.75 0 0 0 0-1.5h-.2V10.9a1.698 1.698 0 0 0 .95-1.527v-7.61A1.701 1.701 0 0 0 11.132.062ZM2.567 12.23a.677.677 0 0 1 .479-1.155h7.336v1.354H3.046a.677.677 0 0 1-.48-.199Zm6.01-3.906a1.702 1.702 0 0 1-1.053-.089a9.546 9.546 0 0 1-3.278-3.278A1.71 1.71 0 0 1 4.708 3l.246-.246a.533.533 0 0 1 .732-.096l.796.796a.533.533 0 0 1-.096.732a.533.533 0 0 0-.095.732L7.563 6.19a.533.533 0 0 0 .732-.095A.533.533 0 0 1 9.027 6l.796.795a.533.533 0 0 1-.096.732l-.246.247a1.702 1.702 0 0 1-.903.55Z" clipRule="evenodd"/>
                    </svg>
                    Contact
                </motion.a>
            </div>
        </div>
    );
}

export default Landing;
