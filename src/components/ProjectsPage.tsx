import {projects} from "../data/projects";
import Project from "./Project";

function ProjectsPage() {
    return (
        <section
            id="projects-page"
            className="flex items-center justify-center flex-col mb-28 max-w-[50rem] text-center sm:mb-0"
        >
            <h2 className="text-center">My Projects</h2>
            {projects.map((project, index) => {
                return <Project key={index} project={project}></Project>;
            })}
        </section>
    );
}

export default ProjectsPage;
