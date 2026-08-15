import { BsCodeSlash } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { TbStackFront } from "react-icons/tb";

export const RoadmapListArray = [
    {
        id: 1,
        title: 'Frontend',
        next: '/roadmap/frontend',
        icon: <TbStackFront />
    },

    {
        id: 2,
        title: 'Backend',
        next: '/roadmap/backend',
        icon: <BsCodeSlash />
    },

    {
        id: 3,
        title: 'Android',
        next: '/roadmap/android',
        icon: <FaAndroid/>
    },
]