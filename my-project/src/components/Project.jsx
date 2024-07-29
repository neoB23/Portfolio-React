import React from 'react';

function Project() {
    return (
        <div className="flex flex-col gap-y-8 justify-center items-center min-h-screen p-4 pt-44">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <img 
                    className="w-full h-48 md:w-1/2 object-cover transition-transform duration-300 hover:scale-105" 
                    src="./images/logo.png" 
                    alt="Project Logo" 
                />
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h1 className="text-xl md:text-2xl font-bold mb-2">NU LANDING PAGE</h1>
                    <p className="text-gray-700 text-base mb-4">
                        This is a description of the project. You can include information about the project's features, technologies used, or any other relevant details.
                    </p>
                    <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                </div>
            </div>

            {/* Repeat the above block for other projects
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    <img 
                        className="w-full h-48 md:w-1/2 object-cover transition-transform duration-300 hover:scale-105" 
                        src="./images/logo.png" 
                        alt="Project Logo" 
                    />
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                        <h1 className="text-xl md:text-2xl font-bold mb-2">NU LANDING PAGE</h1>
                        <p className="text-gray-700 text-base mb-4">
                            This is a description of the project. You can include information about the project's features, technologies used, or any other relevant details.
                        </p>
                        <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            ))} */}
        </div>
    );
}

export default Project;
