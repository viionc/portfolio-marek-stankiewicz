import clsx from "clsx";
import {useEffect, useState} from "react";

type StarProps = {
    top: number;
    left: number;
    active: boolean;
};
const NUMBER_OF_STARS = 250;
const ARRAY_OF_STARS: StarProps[] = Array(NUMBER_OF_STARS)
    .fill({})
    .map(() => {
        return {
            top: Math.floor(Math.random() * 4800),
            left: Math.floor(Math.random() * window.innerWidth),
            active: false,
        };
    });

function Stars() {
    const [stars, setStars] = useState<StarProps[]>(ARRAY_OF_STARS);

    const highlightRandomStars = () => {
        const newStars = [...ARRAY_OF_STARS];
        newStars.forEach((star) => (star.active = false));
        for (let i = 0; i < 20; i++) {
            const n = Math.floor(Math.random() * NUMBER_OF_STARS);
            newStars[n].active = true;
        }
        setStars(newStars);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            highlightRandomStars();
        }, 1000);
        return () => clearInterval(interval);
    }, [stars]);

    return (
        <div id="stars" className="absolute right-0 h-[3800px] md:h-[4800px] w-full overflow-hidden" style={{top: "-120px"}}>
            <div className="relative w-full h-full">
                {stars.map((star, index) => {
                    return (
                        <span
                            className={clsx("absolute", {"star-active": star.active === true})}
                            key={index}
                            style={{top: `${star.top}px`, left: `${star.left}px`}}></span>
                    );
                })}
            </div>
        </div>
    );
}

export default Stars;
