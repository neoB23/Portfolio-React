import React, { useState, useEffect } from 'react';

function Nav() {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full bottom-0 sm:top-0 sm:bottom-auto z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full sm:-translate-y-full'}`}>
            <div className="text-white text-2xl flex items-center justify-center p-5">
                <div className="bg-neutral-900 space-x-4 rounded-full p-5">
                    <a href="landingpage.jsx">Home</a>
                    <a href="About.jsx">About</a>
                    <a href="#">Project</a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
