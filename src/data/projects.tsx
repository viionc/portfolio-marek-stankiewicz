export type ProjectProps = {
    label: string;
    image: string;
    description: string;
};
export const projects: ProjectProps[] = [
    {
        label: "Generate Random Data",
        image: "grdapi.png",
        description:
            "Generate Random Data (GRD) is an API that will generate random people. By default it will respond with only 1 item, but you can use queries to increase the limit. For this project I worked with NodeJS, ExpressJS and Vercel as a serverless hosting.",
    },
    {
        label: "Bookord",
        image: "bookord.png",
        description:
            "Bookord is a Fullstack, real-time chat application. \n With Firebase Authentication and Firebase Database I've built a secure, dynamic and lightning-fast platform.",
    },
    {
        label: "Image Gallery",
        image: "imagegallery.png",
        description:
            "Next.js, Cloudinary, and cutting-edge AI image editing converge to offer you a captivating visual experience. Explore a world of stunning imagery like never before, with seamless integration and AI-enhanced editing at your fingertips.",
    },
    {
        label: "Furniture Shop",
        image: "furnitureshop.png",
        description:
            "E-commerce app for a furniture shop. Browse selection of the best quality furniture, click cards to see product's information and add items to cart.",
    },
    {
        label: "Anime Search",
        image: "animesearch.jpg",
        description:
            "Anime Search uses Jikan REST API to fetch shows with selected filters. You can combine all filters to narrow down your searches.",
    },
    {
        label: "Goverment Webpage",
        image: "gov.png",
        description:
            "Clone of a static website I was given as an assignment. Responsive design allows viewing the page on any device with no issues.",
    },
    {
        label: "Słowordle",
        image: "slowordle.png",
        description:
            "Słowordle is a wordle but in Polish. Guess the word in 6 tries, every time you type a word you will get hints. Every day there is a new word added, you can also play games from previous days.",
    },
];
