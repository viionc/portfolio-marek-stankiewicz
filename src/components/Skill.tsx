import {motion} from "framer-motion";

function Skill({skill, delay}: {skill: string; delay: number}) {
    return (
        <motion.div
            className="relative"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay: delay}}
        >
            <img
                src={`/logos/${skill}logo.png`}
                alt={`${skill} logo`}
                height={60}
                width={60}
                style={{objectFit: "scale-down"}}
            />
        </motion.div>
    );
}

export default Skill;
