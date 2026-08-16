import { BsCodeSlash, BsRobot } from "react-icons/bs";
import { FaAndroid, FaAppStore, FaDatabase, FaGamepad } from "react-icons/fa";
import { RiStockLine } from "react-icons/ri";
import { SiPagespeedinsights } from "react-icons/si";
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
    {
        id: 4,
        title: 'Game Developer',
        next: '/roadmap/gamedeveloper',
        icon: <FaGamepad/>
    },
    {
        id: 5,
        title: 'Low Latancy Developers (C++)',
        next: '/roadmap/lowlatancycpp',
        icon: <SiPagespeedinsights/>
    },
    {
        id: 6,
        title: 'Artificial Intelligence and Data Scinece',
        next: '/roadmap/lowlatancycpp',
        icon: <BsRobot/>
    },
    {
        id: 7,
        title: 'Data Analyst',
        next: '/roadmap/dataanalyst',
        icon: <FaDatabase/>
    },
    {
        id: 8,
        title: 'Quantitative Finance',
        next: '/roadmap/qunat',
        icon: <RiStockLine/>
    },
    {
        id: 9,
        title: 'iOS',
        next: '/roadmap/ios',
        icon: <FaAppStore/>
    },
    {
        id: 10,
        title: 'Competitive Programming',
        next: '/roadmap/cp',
        icon: <FaAppStore/>
    },
]