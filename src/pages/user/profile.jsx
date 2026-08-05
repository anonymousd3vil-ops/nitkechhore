import { useSelector } from "react-redux";
import MainLayout from "../../layout/mainLayout.jsx";
import { Link } from "react-router-dom";

function Profile() {
    const loading = useSelector((state) => state.auth.loading);
    const userData = useSelector((state) => state.auth.data);
    const role = useSelector((state) => state.auth.role);

    if (loading) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-base-100 flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            </MainLayout>
        );
    }

    if (!userData) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-base-100 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Profile not found</h2>
                        <p className="text-base-content/60 mt-2">
                            Unable to load your profile information.
                        </p>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <title>{userData.fullName}</title>
            <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10 flex-col">
                <div className="w-full max-w-5xl bg-base-200 shadow-2xl border border-base-300 overflow-hidden grid lg:grid-cols-5">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 bg-primary text-primary-content p-8 md:p-10 flex flex-col items-center justify-center text-center">

                        {/* Avatar */}
                        <div className="avatar">
                            <div className="w-36 md:w-44 rounded-full ring ring-primary-content ring-offset-base-100 ring-offset-4">
                                <img
                                    src={userData?.avatar?.secure_url}
                                    alt={userData?.fullName}
                                />
                            </div>
                        </div>

                        {/* Name */}
                        <h1 className="text-3xl md:text-4xl font-black mt-7 font-primary">
                            {userData.fullName}
                        </h1>

                        {/* Role */}
                        <div className="badge badge-lg bg-primary-content text-primary border-none mt-3 font-semibold capitalize font-secondary rounded-lg">
                            {(role === 'USER') ? 'STUDENT' : role}
                        </div>

                        <div className="divider before:bg-primary-content/20 after:bg-primary-content/20 w-full"></div>

                        {/* Small Description */}
                        <p className="text-primary-content/70 text-sm max-w-xs leading-relaxed font-primary">
                            Student at National Institute of Technology Agartala
                        </p>
                    </div>

                    {/*  RIGHT SIDE  */}
                    <div className="lg:col-span-3 p-7 md:p-10 lg:p-12">

                        {/* Heading */}
                        <div className="mb-8">
                            <p className="text-primary font-semibold text-sm uppercase tracking-widest font-secondary">
                                Student Profile
                            </p>

                            <h2 className="text-3xl font-black mt-1 font-primary">
                                Personal Information
                            </h2>

                            <p className="text-base-content/50 mt-2 text-sm font-secondary">
                                Your academic and account information.
                            </p>
                        </div>

                        {/* Information */}
                        <div className="space-y-4">

                            {/* Branch */}
                            <div className="bg-base-100 border border-base-300 rounded-2xl p-5 hover:border-primary/50 transition">
                                <p className="text-xs uppercase tracking-wider text-base-content/50 font-semibold font-secondary">
                                    Branch
                                </p>

                                <p className="text-lg font-bold mt-1 font-primary">
                                    {userData.branch || "Not provided"}
                                </p>
                            </div>

                            {/* Enrollment */}
                            <div className="bg-base-100 border border-base-300 rounded-2xl p-5 hover:border-primary/50 transition">
                                <p className="text-xs uppercase tracking-wider text-base-content/50 font-semibold font-secondary">
                                    Enrolment Number
                                </p>

                                <p className="text-lg font-bold mt-1 font-primary">
                                    {userData.enrolmentNo || "Not provided"}
                                </p>
                            </div>

                            {/* Email */}
                            <div className="bg-base-100 border border-base-300 rounded-2xl p-5 hover:border-primary/50 transition">
                                <p className="text-xs uppercase tracking-wider text-base-content/50 font-semibold font-secondary">
                                    Email Address
                                </p>

                                <p className="text-lg font-bold mt-1 break-all font-primary">
                                    {userData.email || "Not provided"}
                                </p>
                            </div>

                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 pt-6 border-t border-base-300 flex items-center justify-between gap-4 flex-wrap">
                            <div>
                                <p className="text-xs text-base-content/40 font-secondary">
                                    NIT Ke Chhore
                                </p>

                                <p className="font-semibold text-sm font-secondary">
                                    Student Community
                                </p>
                            </div>

                            <Link to={'/editprofile'}>
                                <button className="btn btn-primary rounded-xl px-6">
                                    Edit Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    role === "ADMIN" && (
                        <div className="mt-12 w-full">
                            {/* Heading */}
                            <div className="text-center mb-7">
                                <p className="text-primary text-sm font-semibold uppercase tracking-widest">
                                    Admin Panel
                                </p>

                                <h1 className="text-2xl md:text-3xl font-black mt-1">
                                    Admin Functionalities
                                </h1>

                            </div>

                            {/* Admin Actions */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                                {/* Queries */}
                                <Link to={'/admin/queries'}>
                                    <button className="btn btn-primary rounded-xl px-8 w-full md:w-auto min-w-48 shadow-md hover:shadow-lg transition-all">
                                        User Queries
                                    </button>
                                </Link>

                                {/* Upload Notes */}
                                <Link to={'/admin/uploadnotes'}>
                                    <button className="btn btn-outline btn-primary rounded-xl px-8 w-full md:w-auto min-w-48 hover:shadow-lg transition-all">
                                        Upload Notes
                                    </button>
                                </Link>

                            </div>

                        </div>
                    )
                }
            </div>
        </MainLayout>
    );
}

export default Profile;