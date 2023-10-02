import Skill from "./Skill";

function SkillsPage() {
    const skills = ["html", "css", "javascript", "typescript", "react", "bootstrap", "git", "tailwind", "nodejs"];

    return (
        <section id="skills-page" className="flex mt-36 gap-5 flex-wrap justify-center items-center scroll-mt-32 z-10">
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} delay={0.1 * index}></Skill>
            ))}
        </section>
    );
}

export default SkillsPage;
