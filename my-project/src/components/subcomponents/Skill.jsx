import React from 'react';
import { motion } from 'framer-motion';

function Skill() {
    return (
        // <div className="pt-20 lg:pt-0">
        //     <div className="flex justify-center items-center text-white font-bold text-2xl mb-8">
        //         <h1>Tech Stack</h1>
        //     </div>
        //     <div className="flex flex-col items-center gap-y-2">
        //         <motion.div
        //             className="flex justify-center items-center gap-x-2 lg:gap-x-2"
        //             initial={{ opacity: 0, y: 20 }} // Initial state before scrolling into view
        //             whileInView={{ opacity: 1, y: 0 }} // Final state when scrolled into view
        //             viewport={{ once: true }} // Ensure animation happens only once
        //             transition={{ duration: 0.8 }} // Duration of the animation
        //         >
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>HTML</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>CSS</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>JavaScript</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>React JS</h1>
        //             </div>
        //         </motion.div>
        //         <motion.div
        //             className="flex justify-center items-center gap-x-2 lg:gap-x-2"
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: 0.8 }}
        //         >
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>Tailwind</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>MySQL</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>C#</h1>
        //             </div>
        //             <div className="bg-white flex items-center justify-center p-3 rounded-lg">
        //                 <h1>Netlify</h1>
        //             </div>
        //         </motion.div>
        //     </div>
        // </div>
        <div className="pt-44 lg:pt-0"> {/* Add padding-top for separation */}
            <h1 className="flex justify-center item-center text-white font-bold text-3xl p-12">Tech Stack</h1>
            <div className="flex space-x-16  overflow-hidden bg-neutral-950 pb-44">
                <div className="flex w-full animate-loop-scroll space-x-16 sm:space-x-16">
                    <img src="/images/1.png" alt="HTML" className="max-w-none" />
                    <img src="/images/2.png" alt="CSS" className="max-w-none" />
                    <img src="/images/3.png" alt="JavaScript" className="max-w-none" />
                    <img src="/images/4.png" alt="React JS" className="max-w-none" />
                    <img src="/images/5.png" alt="MySQL" className="max-w-none" />
                    <img src="/images/6.png" alt="C#" className="max-w-none" />
                    <img src="/images/7.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/8.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/9.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/10.png" alt="Netlify" className="max-w-none" />
                </div>

                <div className="flex space-x-16  w-full animate-loop-scroll" aria-hidden="true">
                    <img src="/images/1.png" alt="HTML" className="max-w-none" />
                    <img src="/images/2.png" alt="CSS" className="max-w-none" />
                    <img src="/images/3.png" alt="JavaScript" className="max-w-none" />
                    <img src="/images/4.png" alt="React JS" className="max-w-none" />
                    <img src="/images/5.png" alt="MySQL" className="max-w-none" />
                    <img src="/images/6.png" alt="C#" className="max-w-none" />
                    <img src="/images/7.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/8.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/9.png" alt="Netlify" className="max-w-none" />
                    <img src="/images/10.png" alt="Netlify" className="max-w-none" />
                </div>
            </div>
        </div>
    );
}

export default Skill;
