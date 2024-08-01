import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Volunteer() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="flex justify-center items-center bg-neutral-950 ">
            <div className="flex flex-col items-center">
                <motion.h1 
                    className="text-white font-bold text-xl md:text-2xl flex pb-8 md:pb-12"
                    initial="hidden"
                    animate={controls}
                    variants={itemVariants}
                >
                    Volunteer & Community
                </motion.h1>
                <div className="flex flex-col lg:flex-row lg:gap-x-12 gap-y-8 md:gap-y-12 pb-16 md:pb-24" ref={ref}> 
                    <motion.div 
                        className="bg-zinc-900 p-3 flex flex-col lg:flex-row items-center lg:space-x-4 rounded-[20px]" 
                        initial="hidden"
                        animate={controls}
                        variants={itemVariants}
                    > 
                        <img 
                            src="images/FWDP.jpg" 
                            alt="Fwdp Logo" 
                            className="rounded-full w-16 h-16 md:w-24 md:h-24"
                        />
                        <div className="flex flex-col mt-4 lg:mt-0 lg:ml-4">
                            <h1 className="text-white font-bold text-sm md:text-base">Filipino Web Developer Peers</h1>
                            <div className="flex flex-row justify-center item-center lg:space-x-4 mt-2"> 
                                <p className="bg-zinc-700 p-2 rounded-full text-xs sm:text-sm text-white">2023 - Present</p>
                                <p className="bg-zinc-700 p-2 rounded-full text-xs sm:text-sm text-white">Creatives</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="bg-zinc-900 p-3 flex flex-col lg:flex-row items-center lg:space-x-4 rounded-[20px]" 
                        initial="hidden"
                        animate={controls}
                        variants={itemVariants}
                    > 
                        <img 
                            src="images/VP.jpg" 
                            alt="Virtual Protocol Logo" 
                            className="rounded-full w-16 h-16 md:w-24 md:h-24"
                        />
                        <div className="flex flex-col mt-4 lg:mt-0 lg:ml-4">
                            <h1 className="text-white font-bold text-sm md:text-base">Virtual Protocol</h1>
                            <div className="flex flex-row justify-center item-center lg:space-x-4 mt-2">
                                <p className="bg-zinc-700 p-2 rounded-full text-xs sm:text-sm text-white">2024 - Present</p>
                                <p className="bg-zinc-700 p-2 rounded-full text-xs sm:text-sm text-white">Volunteer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Volunteer;
