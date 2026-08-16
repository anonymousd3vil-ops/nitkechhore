export default function RoadmapTitle({title}){

    return (
        <div className="text-center max-w-3xl mb-8 font-primary">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3 text-primary">
                {title}
            </h1>

            <p className="text-sm sm:text-base text-secondary mb-5">
                Click any step in the roadmap to view detailed information.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-secondary">
                <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7c3aed]" />
                <span>Personal Recommendation</span>
                </div>

                <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0284c7]" />
                <span>Alternative Option</span>
                </div>

                <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#475569]" />
                <span>General / Flexible Order</span>
                </div>
            </div>
        </div>
    );
}

