import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <div className="flex justify-center items-center flex-col lg:flex-row bg-neutral-950 p-4 lg:p-12 text-white pt-12 lg:pt-44">
            <div className="img1"> 
            <motion.img 
                src="/images/image1.jpg" 
                className="rounded-full w-full max-w-sm lg:max-w-sm mb-5 lg:mb-0 lg:mr-8 mt-4 lg:mt-0 imgg " 
                
                alt="Logo" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />
            </div>
            <div className="max-w-full lg:max-w-2xl px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    <motion.div
                        className="p-6 bg-neutral-800 rounded-lg flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.171 12.906l-2.153 6.411l2.672-.89l1.568 2.34l1.825-5.183m5.73-2.678l2.154 6.411l-2.673-.89l-1.568 2.34l-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.68 1.68 0 0 1 2.64 0a1.68 1.68 0 0 0 1.515.628a1.68 1.68 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.68 1.68 0 0 1 0 2.639a1.68 1.68 0 0 0-.628 1.515a1.68 1.68 0 0 1-1.866 1.866a1.68 1.68 0 0 0-1.516.628a1.68 1.68 0 0 1-2.639 0a1.68 1.68 0 0 0-1.515-.628a1.68 1.68 0 0 1-1.867-1.866a1.68 1.68 0 0 0-.627-1.515a1.68 1.68 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.68 1.68 0 0 1 9.165 4.3M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/>
                        </svg>
                        <h1 className="font-bold text-lg">Experience</h1>
                        <p className="text-sm">Front-End Development</p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-neutral-800 rounded-lg flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="white" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/>
                        </svg>
                        <h1 className="font-bold text-lg">Education</h1>
                        <p className="text-sm">BS Information Technology</p>
                    </motion.div>
                </div>

                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    About Me
                </motion.h1>
                <motion.p
                    className="text-sm lg:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Hello! I'm a third-year BS Information Technology student at the University of Rizal System, Cainta Campus.
                    I love designing and building websites, combining creativity with technical skills to create engaging online experiences. 
                    When I'm not coding, you'll find me enjoying a good cup of coffee, which fuels my creativity and keeps me motivated. 
                    I'm excited to continue honing my skills and taking on new challenges. Thanks for learning a bit about me!
                </motion.p>
            </div>
        </div>
    );
}

export default About;
