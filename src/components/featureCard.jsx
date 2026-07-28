function FeatureCard({ topic, tagline, icon }) {
    return (
        <div className="card bg-base-200 border border-base-300 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group w-72">
            <div className="card-body">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <span className="text-2xl">{icon}</span>
                </div>

                <h2 className="card-title text-primary text-xl group-hover:text-secondary transition-colors">
                    {topic}
                </h2>

                <p className="text-base-content/70 leading-relaxed">
                    {tagline}
                </p>

                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-primary btn-sm">
                        Explore →
                    </button>
                </div>
            </div>
        </div>
    );
}

function Categories({ topic, icon }) {
    return (
        <div className="card bg-base-200 border border-base-300 shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer w-52">
            <div className="card-body items-center justify-center py-8">

                <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-3">
                    {icon}
                </div>

                <h2 className="text-xl font-bold text-center text-base-content">
                    {topic}
                </h2>
            </div>
        </div>
    );
}

export {
    FeatureCard, 
    Categories
};