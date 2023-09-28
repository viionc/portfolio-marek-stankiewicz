import {useScroll, motion} from "framer-motion";
import {ProjectProps} from "../data/projects";
import {useRef} from "react";

function Project({project}: {project: ProjectProps}) {
    const productRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: productRef,
        offset: ["0 1", "1.33 1"],
    });

    return (
        <motion.div
            ref={productRef}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
        >
            <article className="group bg-white bg-opacity-60 rounded-lg shadow-md overflow-hidden border border-black/25 sm:pr-8 relative max-w-[42rem] sm:h-[20rem] hover:bg-opacity-50 transition">
                <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] text-gray-900">
                    <h3 className="text-2xl font-semibold">{project.label}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">{project.description}</p>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <a
                            href={project.source}
                            target="_blank"
                            className="flex text-white bg-blue-700 p-2 px-5 rounded-lg gap-2 items-center justify-center hover:bg-gray-900 hover:bg-opacity-25 hover:text-white transition outline-none focus:scale-110 active:scale-105"
                        >
                            Source
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            className="bg-white text-black p-2 px-5 rounded-lg gap-2 items-center justify-center hover:bg-gray-900 hover:bg-opacity-25 hover:text-white transition outline-none focus:scale-110 active:scale-105"
                        >
                            Demo
                        </a>
                    </div>
                </div>
                <img
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 transition"
                    src={`/projects/${project.image}`}
                    alt={`${project.label} image`}
                ></img>
            </article>
        </motion.div>
    );
}

export default Project;
