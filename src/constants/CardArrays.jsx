import { BsRobot } from "react-icons/bs";
import { GiBookshelf, GiJusticeStar } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosBonfire } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { MdEvent, MdInterests, MdStars } from "react-icons/md";
import { RiUserCommunityFill, RiUserCommunityLine } from "react-icons/ri";


export const FeaturesCardArray = [
  {
    title: "Notes",
    tagline: "Semester-wise study material",
    icon: <GiBookshelf />
  },
  {
    title: "Coding",
    tagline: "DSA, Web Development, CP",
    icon: <IoCodeSlash />
  },
  {
    title: "Projects",
    tagline: "DSA, Web Development, CP",
    icon: <GrProjects />
  },
  {
    title: "Events",
    tagline: "DSA, Web Development, CP",
    icon: <MdEvent />
  },
  {
    title: "Opportunities",
    tagline: "DSA, Web Development, CP",
    icon: <GiJusticeStar />
  },
  {
    title: "Community",
    tagline: "DSA, Web Development, CP",
    icon: <RiUserCommunityLine />
  }
]

// export const categories = [
//   ["Notes", "📚"], ["Coding", "👨‍💻"], ["UI/UX", "🌵"], ["AI", "🤖"], ["Placements", "🌟"], ["Projects", "💡"], ["Community", "💭"], ["Fun", "🎉"]
// ]

export const categories = [
  {
    title: 'Notes',
    icon: <GiBookshelf className="text-2xl"/>
  },
  {
    title: 'Coding',
    icon: <IoCodeSlash className="text-2xl"/>
  },
  {
    title: 'AI',
    icon: <BsRobot className="text-2xl"/>
  },
  {
    title: 'UI/UX',
    icon: <MdInterests className="text-2xl"/>
  },
  {
    title: 'Placements',
    icon: <MdStars className="text-2xl"/>
  },
  {
    title: 'Projects',
    icon: <GrProjects className="text-2xl"/>
  },
  {
    title: 'Community',
    icon: <RiUserCommunityFill className="text-2xl"/>
  },
  {
    title: 'Fun',
    icon: <IoIosBonfire className="text-2xl"/>
  },
]