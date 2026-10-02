import { useState } from "react";
import MainLayout from "../layout/mainLayout";
import profilePic from "../assets/profilepic.jpeg";
import { developers, memberDetails } from "../constants/memberArray";
import MemberCard from "../components/memberCard";
import DeveloperCard from "../components/developersCard";
import { GoPeople } from "react-icons/go";
import { Laptop } from "lucide-react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';


function AboutUs(){
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <MainLayout>
            <title>About Us | NITKeChhore</title>
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
                                <GoPeople size={35}/> Lazy Society Members
                            </h2>
                            <div className="space-y-3 h-100 overflow-y-scroll">
                                {memberDetails.map((member) => <MemberCard key={member.name} name={member.name} profilePic={member.profilePic} memberTag={member.memberTag} onClick={() => setSelectedMember(member)}/>)}
                            </div>
                        </div>
                    </div>

                    {/* Developers Card */}
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-primary mb-6">
                                <Laptop size={35}/> Developers
                            </h2>
                            <div className="space-y-3 h-100 overflow-y-scroll">
                                {developers.map((developer) => <DeveloperCard key={developer.name} name={developer.name} profilePic={developer.profilePic} tag={developer.tag} onClick={() => setSelectedMember(developer)} />)}
                            </div>
                        </div>
                    </div>
                </div>

                {selectedMember && (
                    <dialog open className="modal modal-open modal-bottom sm:modal-middle">
                        <div className="modal-box bg-base-100 text-base-content border border-base-300 shadow-2xl max-w-md">
                            <div className="flex flex-col items-center text-center">
                                <div className="avatar mb-4">
                                    <div className="w-32 rounded-full">
                                        <img src={selectedMember.profilePic} alt={selectedMember.name} />
                                    </div>
                                </div>
                                <h3 className="font-bold text-2xl text-primary">
                                    {selectedMember.name}
                                </h3>
                                <span className="badge badge-primary rounded-lg p-2 mt-3">
                                    {
                                        selectedMember.memberTag || selectedMember.tag
                                        
                                    }
                                </span>
                                <span className="badge rounded-lg p-2 mt-3 py-5">
                                    <Link 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        to={`https://www.instagram.com/${selectedMember.insta}`}
                                        className="cursor-pointer hover:text-primary"
                                    >
                                        <BsInstagram size={30}/>
                                    </Link>
                                    {
                                        selectedMember.github && 
                                            <Link 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                to={`https://github.com/${selectedMember.github}`}
                                                className="cursor-pointer hover:text-primary"
                                            >
                                                <BsGithub size={30}/>
                                            </Link>
                                    }
                                </span>
                            </div>

                            <div className="modal-action">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-ghost"
                                    onClick={() => setSelectedMember(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="modal-backdrop" onClick={() => setSelectedMember(null)} />
                    </dialog>
                )}
            </div>
        </MainLayout>
    );
}

export default AboutUs;
