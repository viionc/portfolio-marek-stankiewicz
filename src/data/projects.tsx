export type ProjectProps = {
    label: string;
    image: string;
    description: string;
    source: string;
    demo: string;
    technologies: string[];
};
export const projects: ProjectProps[] = [
    {
        label: "Faketflix",
        image: "faketflix.png",
        description: "A Fullstack clone of the Netflix app. This project is built using React and Firebase for Backend.",
        source: "https://github.com/viionc/faketlix",
        demo: "https://faketlix.vercel.app/",
        technologies: ["TypeScript", "React", "Firebase", "TMDB API", "Google Cloud", "TailwindCSS"],
    },
    {
        label: "Generate Random Data",
        image: "grdapi.png",
        description:
            "Generate Random Data (GRD) is an API that will generate random people. For this project I worked with NodeJS, ExpressJS and Vercel as a serverless hosting.",
        source: "https://github.com/viionc/grd-api",
        demo: "https://grd-api.vercel.app/",
        technologies: ["TypeScript", "React", "NodeJS", "ExpressJS", "TailwindCSS"],
    },
    {
        label: "Bookord",
        image: "bookord.png",
        description:
            "Bookord is a Fullstack, real-time chat application. \n With Firebase Authentication and Firebase Database I've built a secure, dynamic and lightning-fast platform.",
        source: "https://github.com/viionc/bookord",
        demo: "https://bookord.web.app/",
        technologies: ["TypeScript", "React", "Firebase", "Bootstrap"],
    },
    {
        label: "Image Gallery",
        image: "imagegallery.png",
        description: "Next.js, Cloudinary, and cutting-edge AI image editing converge to offer you a captivating visual experience.",
        source: "https://github.com/viionc/image-gallery",
        demo: "https://image-gallery-beta-woad.vercel.app/gallery",
        technologies: ["TypeScript", "Next.js", "React", "Cloudinary API", "TailwindCSS"],
    },
    {
        label: "Furniture Shop",
        image: "furnitureshop.png",
        description: "E-commerce app for a furniture shop. Browse selection of the best quality furniture.",
        source: "https://github.com/viionc/furnitureshop",
        demo: "https://furnitureshop-ochre.vercel.app/",
        technologies: ["TypeScript", "React", "TailwindCSS"],
    },
    {
        label: "Anime Search",
        image: "animesearch.jpg",
        description:
            "Anime Search uses Jikan REST API to fetch shows with selected filters. You can combine all filters to narrow down your searches.",
        source: "https://github.com/viionc/anime-react",
        demo: "https://viionc.github.io/anime-react/",
        technologies: ["JavaScript", "React", "CSS"],
    },
    {
        label: "Słowordle",
        image: "slowordle.png",
        description:
            "Słowordle is a wordle but in Polish. Guess the word in 6 tries, every time you type a word you will get hints. Every day there is a new word added, you can also play games from previous days.",
        source: "https://github.com/viionc/slowordle",
        demo: "https://viionc.github.io/slowordle/",
        technologies: ["JavaScript", "React", "CSS"],
    },
];
