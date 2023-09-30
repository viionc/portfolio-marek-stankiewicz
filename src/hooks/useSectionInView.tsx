import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {SectionName, useActiveSection} from "../context/ActiveSectionContext";

function useSectionInView(section: SectionName, threshold: number) {
    const {ref, inView} = useInView({
        threshold,
    });
    const {setActiveSection, lastClick} = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) setActiveSection(section);
        // if (section === "Home") {
        //     document.body.classList.remove("body-second");
        //     document.body.classList.remove("body-third");
        //     document.body.classList.remove("body-fourth");
        // }
        // if (section === "About") {
        //     document.body.classList.add("body-second");
        //     document.body.classList.remove("body-third");
        //     document.body.classList.remove("body-fourth");
        // }
        // if (section === "Projects") {
        //     document.body.classList.add("body-third");
        //     document.body.classList.remove("body-second");
        //     document.body.classList.remove("body-fourth");
        // }
        // if (section === "Contact") {
        //     document.body.classList.add("body-fourth");
        //     document.body.classList.remove("body-third");
        //     document.body.classList.remove("body-second");
        // }
    }, [inView, lastClick, section]);

    return {
        ref,
    };
}

export default useSectionInView;
