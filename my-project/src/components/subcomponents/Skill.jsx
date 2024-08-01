import React from 'react';
import { motion } from 'framer-motion';

function Skill() {
    return (
        <div className="pt-24 lg:pt-0"> {/* Add padding-top for separation */}
            <h1 className="flex justify-center items-center text-white font-bold text-xl md:text-2xl p-12">Tech Stack</h1>
            
            {/* For larger screens */}
            <div className="hidden lg:flex space-x-16 overflow-hidden bg-neutral-950 pb-44">
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

                <div className="flex space-x-16 w-full animate-loop-scroll" aria-hidden="true">
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
            
            {/* For mobile screens */}
            <div className="flex lg:hidden space-x-4 overflow-hidden bg-neutral-950 pb-24">
                <div className="flex w-full animate-loop-scroll space-x-4">
                    <img src="/images/1.png" alt="HTML" className="max-w-none w-16" />
                    <img src="/images/2.png" alt="CSS" className="max-w-none w-16" />
                    <img src="/images/3.png" alt="JavaScript" className="max-w-none w-16" />
                    <img src="/images/4.png" alt="React JS" className="max-w-none w-16" />
                    <img src="/images/5.png" alt="MySQL" className="max-w-none w-16" />
                    <img src="/images/6.png" alt="C#" className="max-w-none w-16" />
                    <img src="/images/7.png" alt="Netlify" className="max-w-none w-16" />
                    <img src="/images/8.png" alt="Netlify" className="max-w-none w-16" />
                    <img src="/images/9.png" alt="Netlify" className="max-w-none w-16" />
                    <img src="/images/10.png" alt="Netlify" className="max-w-none w-16" />
                </div>
            </div>
        </div>
    );
}

export default Skill;
