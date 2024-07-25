import React from 'react';

function About() {
    return (  
        <div className="flex flex-col lg:flex-row h-screen justify-center items-center bg-neutral-950 p-5 text-white">
            <img src="/images/image1.jpg" className="rounded-lg w-full max-w-md lg:max-w-lg mb-5 lg:mb-0 lg:mr-8 " alt="Logo" />

            <div className="max-w-2xl px-6 lg:px-12">
                <div className="flex ml-2 m-6 justify-center item-center text-center gap-12 "> 
                <div className="p-6 bg-neutral-800 rounded-lg "> 
                <h1 className="font-bold text-lg">Experience</h1>
                <p className="text-sm">1 Year <br/>Front-End Development</p>
                </div>

                <div className="p-6 bg-neutral-800 rounded-lg"> 
                <h1 className="font-bold text-lg">Education</h1>
                <p className="text-sm">BS Information Technology</p>
                </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ">About Me</h1>
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
