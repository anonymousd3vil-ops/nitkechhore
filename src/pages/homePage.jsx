import MainLayout from "../layout/mainLayout.jsx";
import { GoDotFill } from "react-icons/go";
import { SiWpexplorer } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

import { FeaturesCardArray, categories } from "../constants/CardArrays.jsx";

import { Categories, FeatureCard } from "../components/featureCard.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage(){
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
    return (
        <MainLayout>
            <div className="min-h-screen px-6 md:px-20 py-20">
                <div className="absolute animate-bounce hidden md:block w-96 h-96 bg-primary/20 rounded-full blur-3xl top-40 -left-10"></div>
                <div className="absolute animate-bounce hidden md:block w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-0 right-0"></div>

                {/* Hero */}
                <section className="flex flex-col items-center text-center">

                    <h1 className="font-primary text-5xl md:text-7xl font-extrabold text-primary tracking-tight">
                        NIT ke Chhore
                    </h1>

                    <div className="w-52 md:w-96 border-b-2 border-dashed border-primary mt-4"></div>

                    <div className="flex items-center gap-2 md:gap-4 mt-5 font-secondary text-secondary text-lg md:text-xl">
                        <span>Learn</span>
                        <GoDotFill className="text-primary" />
                        <span>Build</span>
                        <GoDotFill className="text-primary" />
                        <span>Grow Together</span>
                    </div>

                    <h2 className="mt-12 text-3xl md:text-6xl font-bold max-w-5xl leading-tight font-primary">
                        Everything a
                        <span className="text-primary"> NIT </span>
                        &
                        <span className="text-secondary"> IIT </span>
                        Student Needs,
                        <br />
                        All in One Place.
                    </h2>

                    <p className="mt-6 text-lg md:text-2xl text-base-content/70 max-w-3xl font-secondary">
                        Notes, Coding Resources, Student Projects, Community,
                        Opportunities, Events and everything that helps you grow.
                    </p>

                    <div className="mt-10 h-16 flex items-center">
                        <TypeAnimation
                            sequence={[
                                "📚 Explore Resources", 1200,
                                "💻 Learn Coding", 1200,
                                "🤝 Join the Community", 1200,
                                "🚀 Discover Student Projects", 1200,
                                "🎯 Crack Placments Together", 1200,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-secondary text-primary text-xl md:text-3xl font-semibold"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">

                        <button className="btn btn-primary btn-lg rounded-xl">
                            <SiWpexplorer className="text-2xl"/> Explore
                        </button>

                        {
                            !isLoggedIn &&
                                <button onClick={() => navigate('/user/register')} className="btn btn-outline btn-secondary btn-lg rounded-xl">
                                    Join Community
                                </button>
                        }

                    </div>

                </section>



                {/* Feature Section */}
                <div className="absolute animate-bounce hidden md:block w-96 h-96 bg-secondary/20 rounded-full blur-3xl top-250 left-0"></div>
                <section className="mt-24">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Why Choose
                            <span className="text-primary">
                                {" "}NitKeChhore?
                            </span>
                        </h2>
                        <p className="mt-3 text-base-content/70 text-lg">
                            Everything curated specially for Engineering Students.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 justify-items-center">
                        {FeaturesCardArray.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                topic={feature.title}
                                tagline={feature.tagline}
                                icon={feature.icon}
                            />
                        ))}

                    </div>

                </section>



                {/* Categories */}

                <section className="mt-24">

                    <div className="text-center">

                        <h2 className="text-4xl md:text-5xl font-bold">
                            Popular Categories
                        </h2>

                        <p className="text-base-content/70 mt-3">
                            Find exactly what you're looking for.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 justify-items-center">

                        {categories.map((category) => (
                            <Categories
                                key={category.title}
                                topic={category.title}
                                icon={category.icon}
                            />
                        ))}

                    </div>

                </section>

            </div>
                        
        </MainLayout>
    )
}

export default HomePage;