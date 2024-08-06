import React, { useEffect } from 'react';

function Project() {
return (
    <section className="sm:pt-44 pt-24">
            <h1 className="text-white justify-center flex item-center font-bold text-3xl lg:text-5xl">Project</h1>
            <p className="text-white justify-center flex item-center font-thin text-xl lg:text-lg p-2"> This is all of my work from Zero to Hero</p>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="https://example.com/kickcraze" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss1.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">KickCraze</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">ReactJS</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">Tailwind</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://example.com/nu-landing-page" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss2.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">NU LANDING PAGE</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">HTML</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">CSS</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://nbaroster.netlify.app/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss3.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">NBA ROSTER</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">HTML</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">CSS</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://example.com/gym-membership" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss4.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">GYM MEMBERSHIP SYSTEM</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">C#</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">MYSQL</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://example.com/car-management" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss5.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">CAR MANAGEMENT SYSTEM</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">C#</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">MYSQL</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="https://example.com/portfolio-v1" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg">
                        <img role="presentation" className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500" src="/images/ss6.png"/>
                        <div className="p-6 space-y-2 rounded-b-lg">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">PORTFOLIO V1</h3>
                            <div className="flex space-x-3"> 
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">HTML</span>
                                <span className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400">CSS</span>
                            </div>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;
