import MainLayout from "../../layout/mainLayout.jsx";
import { RoadmapListArray } from "../../constants/codingConstants/roadmaps/RoadmapListArray.jsx";
import RoadmapListCard from "../../components/coding/roadmap/RoadmapListCard.jsx";

export default function RoadmapList() {
    return (
        <MainLayout>
            <main className="min-h-screen px-5 py-10 sm:px-8 lg:px-12">
                
                {/* Header */}
                <section className="mb-10">
                    <p className="mb-2 font-secondary text-sm font-medium uppercase tracking-widest text-secondary">
                        Learning Paths
                    </p>

                    <h1 className="font-primary text-3xl font-bold text-primary sm:text-4xl">
                        Coding Roadmaps
                    </h1>

                    <p className="mt-3 max-w-2xl font-secondary text-sm leading-6 text-secondary sm:text-base">
                        Choose a technology and follow a structured roadmap
                        to build your skills step by step.
                    </p>
                </section>

                {/* Roadmap Cards */}
                <section>
                    <div
                        className=" grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
                        {RoadmapListArray.map((tech) => (
                            <RoadmapListCard
                                key={tech.id}
                                icon={tech.icon}
                                title={tech.title}
                                next={tech.next}
                            />
                        ))}
                    </div>
                </section>

            </main>
        </MainLayout>
    );
}