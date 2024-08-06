import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const educationData = [
    {
        institution: "University of Rizal System",
        period: "2022 - Present",
        description: "Currently a 3rd-year college student with a strong passion for front-end development. I am deeply engaged in learning and mastering modern web technologies, focusing on creating intuitive and visually appealing user interfaces. My studies and personal projects allow me to explore various front-end frameworks and tools."
    },
    {
        institution: "Our Lady of Fatima University",
        period: "2020-2022",
        description: "Graduated from Our Lady of Fatima University (OLFU) with a focus on the Science, Technology, Engineering, and Mathematics (STEM) strand. This program provided a solid foundation in scientific and mathematical disciplines, preparing me for advanced studies and careers in these fields."
    },
    {
        institution: "Holy Child School of Antipolo",
        period: "2010-2020",
        description: "Graduated from elementary and high school with honors, demonstrating a strong commitment to academic excellence and a consistent track record of high performance throughout my educational journey."
    }
];

const experienceData = [
    {
        title: "NC II TRAINING",
        period: "PRESENT",
        description: "Completed NC II training at TESDA, where I mastered skills in networking, PC assembly, and configuring computers. This training provided me with hands-on experience and technical expertise in managing and maintaining computer systems."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function Education() {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    controls.start('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <section className="flex flex-col lg:flex-row bg-neutral-950 dark:text-white sm:text-white lg:text-white">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        {/* Empty for spacing */}
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <h3 className="text-3xl font-bold">Education</h3>
                        {educationData.map((item, index) => (
                            <motion.div
                                key={item.institution}
                                initial="hidden"
                                animate={controls}
                                variants={itemVariants}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="animate-on-scroll flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
                            >
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">{item.institution}</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">{item.period}</time>
                                    <p className="mt-3">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:text-white lg:flex-row col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"/>
            <div className="container max-w-5xl px-4 py-12 mx-auto flex-col">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 col-span-3">
                        {/* Empty for spacing */}
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <h3 className="text-3xl font-bold">Experience</h3>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial="hidden"
                                animate={controls}
                                variants={itemVariants}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="animate-on-scroll flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
                            >
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">{item.period}</time>
                                    <p className="mt-3">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
