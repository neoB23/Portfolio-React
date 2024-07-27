import React from 'react';

function About() {
    return (  
        <div className="flex flex-col lg:flex-row h-screen justify-center items-center bg-neutral-950 p-5 text-white">
            <img src="/images/image1.jpg" className="rounded-lg w-full max-w-md lg:max-w-lg mb-5 lg:mb-0 lg:mr-8" alt="Logo" />

            <div className="max-w-2xl px-6 lg:px-12">
                <div className="flex ml-2 m-6 justify-center items-center text-center gap-12"> 
                    <div className=" p-6 bg-neutral-800 rounded-lg flex flex-col items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7.171 12.906l-2.153 6.411l2.672-.89l1.568 2.34l1.825-5.183m5.73-2.678l2.154 6.411l-2.673-.89l-1.568 2.34l-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.68 1.68 0 0 1 2.64 0a1.68 1.68 0 0 0 1.515.628a1.68 1.68 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.68 1.68 0 0 1 0 2.639a1.68 1.68 0 0 0-.628 1.515a1.68 1.68 0 0 1-1.866 1.866a1.68 1.68 0 0 0-1.516.628a1.68 1.68 0 0 1-2.639 0a1.68 1.68 0 0 0-1.515-.628a1.68 1.68 0 0 1-1.867-1.866a1.68 1.68 0 0 0-.627-1.515a1.68 1.68 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.68 1.68 0 0 1 9.165 4.3M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/>
                        </svg>
                        <h1 className="font-bold text-lg">Experience</h1>
                        <p className="text-sm">Front-End Development</p>
                    </div>

                    <div className="p-6 bg-neutral-800 rounded-lg flex flex-col items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="white" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/>
                        </svg>
                        <h1 className="font-bold text-lg">Education</h1>
                        <p className="text-sm">BS Information Technology</p>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
                <p>
                    Hello! I'm a third-year BS Information Technology student at the University of Rizal System, Cainta Campus.
                    I love designing and building websites, combining creativity with technical skills to create engaging online experiences. 
                    When I'm not coding, you'll find me enjoying a good cup of coffee, which fuels my creativity and keeps me motivated. 
                    I'm excited to continue honing my skills and taking on new challenges. Thanks for learning a bit about me!
                </p>
            </div>
        </div>
    );
}

export default About;
