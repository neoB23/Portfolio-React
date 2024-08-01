import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if the link is active
    const isActive = (path) => location.pathname === path;
    
    return (
        <div className={`fixed w-full bottom-0 sm:top-0 sm:bottom-auto z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full sm:-translate-y-full'}`}>
            <div className="text-white text-1xl flex items-center justify-center p-14">
                <div className="space-x-2 rounded-full p-4 bg-neutral-900">
                    <CustomLink href="/" className={isActive('/') ? 'bg-neutral-400 p-2 rounded-full' : 'p-2 rounded-full'}>Home</CustomLink>
                    <CustomLink href="/projects" className={isActive('/projects') ? 'bg-neutral-500 p-2 rounded-full' : 'p-2 rounded-full'}>Projects</CustomLink>
                    <CustomLink href="/about-and-skills" className={isActive('/about-and-skills') ? 'bg-neutral-600 p-2 rounded-full' : 'p-2 rounded-full'}>About</CustomLink>
                </div>
            </div>
        </div>
        
    );
}

function CustomLink({ href, children, ...props }) {
    return (
        <Link
            to={href}
            className="text-white hover:text-blue-500 transition-colors duration-300"
            {...props}
        >
            {children}
        </Link>
    );
}

export default Nav;
