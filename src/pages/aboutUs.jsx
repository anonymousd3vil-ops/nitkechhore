import MainLayout from "../layout/mainLayout";
import profilePic from "../assets/profilepic.jpeg";


function AboutUs(){
    return (
        <MainLayout>
            <div className=" px-6 md:px-20 py-20">
                <div className="flex items-center justify-center flex-col">
                    <img
                        className=""
                        src={profilePic}
                    />
                    <h1 className="text-center font-primary text-5xl md:text-7xl font-extrabold text-primary tracking-tight">
                        Who is NIT ke Chhore?
                    </h1>
                    <p className="mt-3 text-base-content/70 text-lg md:w-200 text-center">
                        NIT ke Chhore is a group of students from NIT Agartala, also known as the <span className="text-primary font-bold text-xl">Lazy Society!</span>. Despite the name, every member of the group is deeply passionate about technology, innovation, and building solutions that can shape the future. We believe in learning through collaboration, experimenting with new ideas, and continuously improving our skills. Together, we aspire to inspire, build impactful projects, and leave a lasting contribution to the tech ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12">

                    {/* Members Card */}
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-primary mb-6">
                                🚀 Lazy Society Members
                            </h2>
                            <div className="space-y-3">
                                {[
                                    "Vivek",
                                    "Shivank",
                                    "Aditya",
                                    "Anuj",
                                    "Aakash",
                                    "Anugrah",
                                    "Shoham",
                                ].map((member) => (
                                    <div
                                        key={member}
                                        className="flex items-center justify-between bg-base-100 rounded-xl p-3 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="avatar placeholder">
                                                <div className="bg-secondary text-secondary-content rounded-full w-10">
                                                    <img src="" alt="NotFound" />
                                                </div>
                                            </div>
                                            <span className="font-medium text-lg">
                                                {member}
                                            </span>
                                        </div>
                                        <div className="badge badge-primary rounded-lg">
                                            Member
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Developers Card */}
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-primary mb-6">
                                💻 Developers
                            </h2>
                            <div className="space-y-3">
                                {[
                                    "Vivek"
                                ].map((developer) => (
                                    <div
                                        key={developer}
                                        className="flex items-center justify-between bg-base-100 rounded-xl p-3 hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="avatar placeholder">
                                                <div className="bg-primary text-primary-content rounded-full w-10">
                                                    <div className="bg-secondary text-secondary-content rounded-full w-10">
                                                        <img src="" alt="NotFound" />
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="font-medium text-lg">
                                                {developer}
                                            </span>
                                        </div>
                                        <div className="badge badge-secondary">
                                            Lead Developer
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default AboutUs;