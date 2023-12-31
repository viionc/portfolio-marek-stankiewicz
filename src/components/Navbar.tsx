import {motion} from "framer-motion";
import {links} from "../data/links";
import clsx from "clsx";
import {useActiveSection} from "../context/ActiveSectionContext";
function Navbar() {
    const {activeSection, setActiveSection, setLastClick} = useActiveSection();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-amber-300 bg-opacity-80 shadow-lg shadow-amber-300/[0.3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{y: -100, x: "-50%", opacity: 0}}
                animate={{y: 0, x: "-50%", opacity: 1}}
            ></motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 items-center justify-center -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem]  flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-800 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
                    {links.map(link => {
                        return (
                            <motion.li
                                className="h-3/4 flex items-center justify-center relative hover:bg-black hover:bg-opacity-10 rounded-full"
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                key={link.link}
                            >
                                <a
                                    className={clsx(
                                        "flex w-full items-center justify-center px-3 py-3 rounded-full hover:text-gray-950 transition",
                                        {
                                            "bg-gray-100 bg-opacity-5 text-gray-100":
                                                activeSection === link.text,
                                        }
                                    )}
                                    onClick={() => {
                                        setLastClick(Date.now());
                                        setActiveSection(link.text);
                                    }}
                                    href={link.link}
                                >
                                    {link.text}
                                    {link.text === activeSection && (
                                        <motion.span
                                            className="bg-gray-500 rounded-full bg-opacity-25 absolute inset-0 -z-10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: "300",
                                                damping: "30",
                                            }}
                                        ></motion.span>
                                    )}
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
