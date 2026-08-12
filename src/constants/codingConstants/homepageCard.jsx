import { FaLaptopCode, FaQuestion, FaRoad } from "react-icons/fa";

export const homePageRedirector = [ 
    {
        id: 1,
        title: 'Roadmaps',
        redirectionLink: '/coding/roadmaps',
        icon: <FaRoad className="text-2xl" />
    },
    {
        id: 2,
        title: 'DSA Questions',
        redirectionLink: '/coding/dsa',
        icon: <FaLaptopCode className="text-2xl"/>
    },
    {
        id: 1,
        title: 'QoTD',
        redirectionLink: '/coding/qotd',
        icon: <FaQuestion className="text-2xl"/>
    }
]