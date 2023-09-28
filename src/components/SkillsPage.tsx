import Skill from "./Skill";

import useSectionInView from "../hooks/useSectionInView";

function SkillsPage() {
    const skills = ["html", "css", "javascript", "typescript", "react", "bootstrap", "git"];
    const {ref} = useSectionInView("Skills", 0.5);

    return (
        <section
            ref={ref}
            id="skills-page"
            className="flex mt-36 gap-5 flex-wrap justify-center items-center scroll-mt-32"
        >
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} delay={0.1 * index}></Skill>
            ))}
        </section>
    );
}

export default SkillsPage;
