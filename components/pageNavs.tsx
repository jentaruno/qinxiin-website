'use client'
import React, {useState} from 'react';
import {motion} from "framer-motion";
import Image from 'next/image'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const navLinks = [
        ['Portfolio', '/portfolio'],
        ['Commission', '/commission/'],
        ['About', '/about'],
        ['Contact', '/contact'],
    ]

    return (
        <div
            className={`w-full mt-0 flex flex-row justify-between sm:justify-center bg-white ${
                showMenu ? 'drop-shadow-lg' : 'drop-shadow-none'
            }`}>
            <div className="block sm:hidden flex flex-row items-center pl-2 py-2">
                <div>
                    <button
                        className="px-3 text-2xl"
                        onClick={toggleMenu}
                    >
                        &#9776;
                    </button>
                </div>
                <div className={showMenu ? 'block' : 'hidden'}>
                    <motion.ul
                        initial={{height: 0}}
                        whileInView={{height: 'auto'}}
                        exit={{height: 0}}
                        className={`mb-2 flex-col sm:mb-0 sm:gap-1`}
                    >
                        {[['Home', '/home'], ...navLinks].map(([title, url], i) => (
                            <motion.div
                                key={`nav-${i}`}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.1, delay: 0.1 * i}}
                            >
                                <li
                                    className={`${
                                        showMenu ? 'mb-2' : 'mr-6'
                                    } sm:mb-0`}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <a
                                        href={url}
                                        className="rounded-lg block px-3 py-2 hover:bg-slate-100 font-medium"
                                    >
                                        {title}
                                    </a>
                                </li>
                            </motion.div>
                        ))}
                    </motion.ul>
                </div>
            </div>
            <a className={'sticky left-8 right-8 md:left-20 top-0 text-xl font-bold'} href={'/'}>
                <Image
                    src="/banner.png"
                    width={28}
                    height={28}
                    alt="Qinxiin banner"
                />
            </a>
            <div className={'hidden sm:flex flex-row w-full justify-center mx-8 my-4'}>
                <ul className="flex flex-row justify-end gap-1">
                    {navLinks.map(([title, url], i) => (
                        <li key={`nav-${i}`} className={'mr-6'}>
                            <a href={url}
                               className="rounded-lg px-3 py-2 hover:bg-slate-100">
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;