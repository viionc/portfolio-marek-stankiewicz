import {projects} from "../data/projects";
import Project from "./Project";
import useSectionInView from "../hooks/useSectionInView";

function ProjectsPage() {
    const {ref} = useSectionInView("Projects", 0.2);

    return (
        <section
            ref={ref}
            id="projects-page"
            className="flex items-center justify-center flex-col mb-28 max-w-[50rem] text-center sm:mb-0 gap-5 scroll-mt-28 overflow-hidden"
        >
            <h2 className="text-center text-4xl mb-8 font-semibold">My Projects</h2>
            {projects.map((project, index) => {
                return <Project key={index} project={project}></Project>;
            })}
        </section>
    );
}

export default ProjectsPage;
