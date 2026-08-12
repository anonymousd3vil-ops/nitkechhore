import { Link } from "react-router-dom";

function CodingCategories({ topic, icon, next }) {
    return (
        <div className="card bg-base-200 border border-base-300 shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer w-52">
            <Link to={next}>
                <div className="card-body items-center justify-center py-8">

                    <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-3">
                        {icon}
                    </div>

                    <h2 className="text-xl font-bold text-center text-base-content font-primary">
                        {topic}
                    </h2>
                </div>
            </Link>
        </div>
    );
}

export default CodingCategories