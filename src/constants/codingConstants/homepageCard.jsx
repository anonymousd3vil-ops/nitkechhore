import { FaLaptopCode, FaQuestion, FaRoad } from "react-icons/fa";

export const homePageRedirector = [ 
    {
        id: 1,
        title: 'Roadmaps',
        redirectionLink: '/roadmap',
        icon: <FaRoad className="text-2xl" />
    },
    {
        id: 2,
        title: 'DSA Questions',
        redirectionLink: '/dsa',
        icon: <FaLaptopCode className="text-2xl"/>
    },
    {
        id: 1,
        title: 'QoTD',
        redirectionLink: '/qotd',
        icon: <FaQuestion className="text-2xl"/>
    }
]