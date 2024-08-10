import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const [expanded, setExpanded] = useState(Array(6).fill(false));

    const toggleExpand = (index) => {
        setExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    const projects = [
        {
            title: 'KickCraze',
            img: '/images/ss1.png',
            skills: ['ReactJS', 'Tailwind'],
            description: 'I challenged myself to develop an e-commerce website using the React.js framework and Vite to enhance my skills.',
            link: 'https://example.com/kickcraze',
            svg1: 'https://github.com/neoB23/KickCraze_Ecommerce-Website',
            svg2: 'https://example.com/svg2',
        },
        {
            title: 'NU LANDING PAGE',
            img: '/images/ss2.png',
            skills: ['HTML', 'CSS'],
            description: 'To enhance my skills in HTML and CSS, I challenged myself to clone the landing page of NU.',
            link: 'https://example.com/nu-landing-page',
            svg1: 'https://github.com/neoB23/NU-CLONE-FRONT-END-PRACTICE',
        },
        {
            title: 'NBA ROSTER',
            img: '/images/ss3.png',
            skills: ['HTML', 'CSS'],
            description: 'I took on the challenge of creating a responsive landing page to enhance my front-end skills. This project helped me improve my abilities in HTML, CSS, and responsive design, focusing on creating adaptable and user-friendly layouts.',
            link: 'https://nbaroster.netlify.app/',
            svg1: 'https://github.com/neoB23/NBA-ROSTER-FRONT-END',
            svg2: 'https://nbaroster.netlify.app/',
        },
        {
            title: 'GYM MEMBERSHIP SYSTEM',
            img: '/images/ss4.png',
            skills: ['C#', 'MYSQL'],
            description: 'This is my project from my second year, which allows users to avail gym memberships and enables admins to manage the gym.',
            link: 'https://example.com/gym-membership',
            svg1: 'https://github.com/neoB23/GYM-MEMBERSHIP-MANAGEMENT-SYSTEM',
        },
        {
            title: 'CAR MANAGEMENT SYSTEM',
            img: '/images/ss5.png',
            skills: ['C#', 'MYSQL'],
            description: 'This is my first-year project and the first complete project I\'ve ever created. It\'s a management system where users can rent cars, and admins can manage the rentals.',
            link: 'https://example.com/car-management',
            svg1: 'https://github.com/neoB23/CAR-RENTAL-SYSTEM',
        },
        {
            title: 'PORTFOLIO V1',
            img: '/images/ss6.png',
            skills: ['HTML', 'CSS'],
            description: 'This is my first attempt at creating a portfolio website without using any frameworks.',
            link: 'https://example.com/portfolio-v1',
            svg1: 'https://github.com/neoB23/Portfolio-V1',
        }
    ];

    return (
        <section className="sm:pt-44 pt-24">
            <h1 className="text-white justify-center flex item-center font-bold text-3xl lg:text-5xl font-abc">Project</h1>
            <p className="text-white justify-center flex item-center font-thin text-xl lg:text-lg p-2"> This is all of my work from Zero to Hero</p>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg relative"
                            data-aos="fade-up"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500"
                                src={project.img}
                            />
                            <div className="p-6 space-y-2 rounded-b-lg">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">{project.title}</h3>
                                <div className="flex space-x-3"> 
                                    {project.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400 sm:dark:text-gray-400">{skill}</span>
                                    ))}
                                </div>
                                <p className="text-white">{expanded[index] ? project.description : `${project.description.substring(0, 100)}...`}</p>
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="text-white hover:underline"
                                >
                                    {expanded[index] ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                            <div className="absolute bottom-3 right-4 flex space-x-2">
                                <a
                                    href={project.svg1} // Link for first SVG
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bababa" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14a.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028a1.83 1.83 0 0 0-.542-.875a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284a2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604q0-.392-.09-.773a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26a7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.342a4.5 4.5 0 0 0-.705-.261a2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.763q-.08.382-.081.773q0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.3a2.9 2.9 0 0 1-.752-.824a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343a1.8 1.8 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333q.169.148.3.33q.136.178.231.381q.11.2.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"/></svg>
                                </a>
                                <a
                                    href={project.svg2} // Link for second SVG
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#bababa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="42" stroke-dashoffset="42" d="M11 5H5V19H19V13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.06s" values="42;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11L20 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.06s" dur="0.03s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M21 3V9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.09s" dur="0.02s" values="8;0"/></path></g></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
