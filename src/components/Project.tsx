import {ProjectProps} from "../data/projects";

function Project({project}: {project: ProjectProps}) {
    return (
        <div
            className="mt-5 p-0 w-50 d-flex gap-3 fs-5 shadow text-white project"
            style={{
                backgroundColor: "#1a1a1a65",
                borderRadius: "25px",
            }}
        >
            <div className="w-50 p-3">{project.description}</div>
            <img
                className="w-50"
                src={`/src/assets/projects/${project.image}`}
                alt={`${project.label} image`}
                style={{objectFit: "cover"}}
            ></img>
        </div>
    );
}

export default Project;
