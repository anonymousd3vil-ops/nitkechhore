import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RoadmapListCard({ icon, title, next }) {
    return (
        <div>
            <Link
                to={next}
                className=" group flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-primary/10 bg-primary/5 font-primary text-primary transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-md"
            >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-lg transition-all duration-200 group-hover:bg-white/15 group-hover:scale-105">
                    {icon}
                </div>

                {/* Title */}
                <p className=" flex-1 m-0 text-sm font-semibold font-primary text-primary transition-colors duration-200 group-hover:text-white">
                    {title}
                </p>

                {/* Arrow */}
                <span className=" text-secondary text-lg opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white " >
                    <FaArrowRight/>
                </span>
            </Link>
        </div>
    );
}