"use client"

import { useState } from 'react';   
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaDiscord, FaTelegramPlane, FaBars } from "react-icons/fa";

const NavBar = () => {
    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return ( 
        <div className="flex px-14 pt-14 justify-between">
            <h1 className="text-3xl font-bold">Coin</h1>
            <div className="text-xl gap-16 hidden sm:flex">
                <p>How it work</p>
                <p>Blog</p>
                <p>Support</p>
            </div>
            <div className="text-4xl gap-4 hidden sm:flex">
                <a href="/">
                    <FaFacebookSquare />
                </a>
                <a href="/">
                    <FaInstagramSquare />
                </a>
                <a href="/">
                    <FaLinkedin />
                </a>
                <a href="/">
                    <FaDiscord />
                </a>
                <a href="/">
                    <FaTelegramPlane />
                </a>
            </div>
            <div className="sm:hidden">
                <button onClick={toggleMenu}>
                    <FaBars className="text-3xl"/>
                </button>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden text-2xl absolute top-24 w-full">
                    <p className='border-white border-b-2 border-t-2 border-solid text-center'>How it works</p>
                    <p className='border-white border-b-2 border-solid text-center'>Blog</p>
                    <p className='border-white border-b-2 border-ssolid text-center'>Support</p>
                </div>
            )}
        </div>
     );
}
 
export default NavBar;