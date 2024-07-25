import React from 'react';

function Project() {
    return (
        <div className="bg-neutral-950 sm:p-12 text-white min-h-screen flex flex-col justify-start items-start">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:ml-56">
                <div className="border-t border-gray-300 w-32 mr-4"></div>
                <h1 className="text-3xl">Skills</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 px-2 sm:ml-52 mb-12">
                <div className="bg-zinc-800 hover:bg-zinc-900 rounded-full w-full sm:w-32 text-center py-2">
                    <h2>Tech Stack</h2>
                </div>
                <div className="bg-zinc-800 hover:bg-zinc-900 rounded-full w-full sm:w-32 text-center py-2">
                    <h2>Tools</h2>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="p-12 mb-12 rounded-lg text-center flex flex-col gap-12 w-full max-w-screen-lg"> 
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>HTML</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>CSS</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>JAVASCRIPT</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>C#</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>REACT JS</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>TAILWIND</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>MY SQL</h1>
                        </div>
                        <div className="bg-neutral-300 w-32 h-32 flex items-center justify-center rounded-lg">
                            <h1>NETLIFY</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
