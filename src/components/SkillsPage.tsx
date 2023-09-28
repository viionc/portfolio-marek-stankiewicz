import Skill from "./Skill";

function SkillsPage() {
    const skills = ["html", "css", "javascript", "typescript", "react", "bootstrap", "git"];
    return (
        <section
            id="skills-page"
            className="flex mt-36 gap-5 flex-wrap justify-center items-center"
        >
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} index={index}></Skill>
            ))}
        </section>
    );
}

export default SkillsPage;
