import React from 'react';
function Landing() {
    return (
        <div className="flex-col flex items-center justify-center min-h-screen ">
            <header className="text-center mb-10 ">
                <h1 className="text-4xl font-thin text-white">Hi
                    <span className="wave">👋</span>
                    , I'm Justin Parlan</h1>
                <h2 className="text-7xl font-bold text-white mt-2 ">
                    A <span className="text-red-500">Front-End Developer</span> <br />
                    & A <span className="text-red-500">UI/UX Designer</span>
                </h2>
            </header>
            <div className="flex flex-row space-x-10 text-1xl mb-24">
                <a href="/" className="flex items-center px-7 py-4 bg-white text-black rounded-full hover:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="mr-2">
                        <path fill="black" fillRule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
                    </svg>
                    Resume
                </a>
                <a href="mailto:justinparlan123@gmail.com" className="flex items-center px-7 py-4 bg-neutral-600 text-white rounded-full hover:bg-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14" className="mr-2">
                        <path fill="white" fillRule="evenodd" d="M11.132.063H3.046A2.178 2.178 0 0 0 .869 2.18v9.574a2.177 2.177 0 0 0 2.177 2.175h9.037a.75.75 0 0 0 0-1.5h-.2V10.9a1.698 1.698 0 0 0 .95-1.527v-7.61A1.701 1.701 0 0 0 11.132.062ZM2.567 12.23a.677.677 0 0 1 .479-1.155h7.336v1.354H3.046a.677.677 0 0 1-.48-.199Zm6.01-3.906a1.702 1.702 0 0 1-1.053-.089a9.546 9.546 0 0 1-3.278-3.278A1.71 1.71 0 0 1 4.708 3l.246-.246a.533.533 0 0 1 .732-.096l.796.796a.533.533 0 0 1-.096.732a.533.533 0 0 0-.095.732L7.563 6.19a.533.533 0 0 0 .732-.095A.533.533 0 0 1 9.027 6l.796.795a.533.533 0 0 1-.096.732l-.246.247a1.702 1.702 0 0 1-.903.55Z" clipRule="evenodd"/>
                    </svg>
                    Contact
                </a>
            </div>
            
        </div>
        
    );
}

export default Landing;
