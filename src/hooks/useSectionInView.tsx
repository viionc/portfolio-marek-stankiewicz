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
    }, [inView, lastClick, section]);

    return {
        ref,
    };
}

export default useSectionInView;
