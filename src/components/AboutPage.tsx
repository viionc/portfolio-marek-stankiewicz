import {motion} from "framer-motion";

import useSectionInView from "../hooks/useSectionInView";

function AboutPage() {
    const {ref} = useSectionInView("About", 0.7);

    return (
        <motion.section
            ref={ref}
            initial={{
                y: -100,
            }}
            animate={{
                y: 0,
            }}
            id="about-page"
            className="flex items-center justify-center flex-col my-28 md:my-80 max-w-[50rem] text-center sm:mb-0 text-2xl scroll-mt-28 "
        >
            <h1 className="text-center p-3 !text-4xl  font-semibold">About Me</h1>
            <p className="mb-2 ">
                I'm looking for a <strong>Junior Frontend Developer</strong> position. I strive to
                improve my skills every day. I look forward to working with experienced people from
                whom I can absorb knowledge and put it to use myself.
            </p>
            <p className="mb-2">
                I focus more on the logic part of development. Optimizing functions or introducing
                new solutions to old projects that I learned along the way is what I enjoy the most.
                The possibility of <strong>constant improvement</strong> is what keeps me interested
                in this field.
            </p>
            <p className="mb-2">
                While I may be a junior developer, I'm enthusiastic and ready to contribute to
                projects and help bring ideas to life.
            </p>
            <p className="mb-2">
                If you are in need of someone who is ambitious, responsible, a fast learner, and
                very proficient in using Google I am the <strong>perfect candidate</strong>.
            </p>
        </motion.section>
    );
}

export default AboutPage;
