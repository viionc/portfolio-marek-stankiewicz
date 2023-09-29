import {motion} from "framer-motion";

import useSectionInView from "../hooks/useSectionInView";

function LandingPage() {
    const {ref} = useSectionInView("Home", 0.9);
    return (
        <section
            ref={ref}
            id="landing-page"
            className="flex items-center justify-center flex-col mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
            >
                Hello, <strong>I'm Marek Stankiewicz</strong>, a <strong>Frontend Developer</strong>{" "}
                who's all about bringing <strong>functionality to life.</strong>
            </motion.p>

            <motion.div
                className="flex gap-3"
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
            >
                <a
                    href="/MarekStankiewiczCVEnglish28092023.pdf"
                    download
                    className="flex bg-blue-700 p-2 px-5 rounded-lg gap-2 items-center justify-center hover:bg-gray-900 hover:bg-opacity-25 hover:text-white transition outline-none focus:scale-110 active:scale-105"
                >
                    My Resume
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="24"
                        height="24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/viionc"
                    target="_blank"
                    className="bg-white text-black p-2 px-5 rounded-lg gap-2 items-center justify-center hover:bg-gray-900 hover:bg-opacity-25 hover:text-white transition outline-none focus:scale-110 active:scale-105"
                >
                    GitHub
                </a>
            </motion.div>
        </section>
    );
}

export default LandingPage;
