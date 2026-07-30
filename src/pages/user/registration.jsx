import { User, Mail, Lock, Hash, GraduationCap } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { IoBookSharp, IoCodeSlashSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../../layout/mainLayout.jsx";
import { registerUser } from "../../applicationStates/reduxSlices/userAuthSlice.js";


function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");

    const [registerationData, setRegisterationData] = useState({
        fullName: '',
        email: '',
        password: '',
        enrolmentNo: '',
        branch: '',
        avatar: ''
    });

    function handelUserInput(e){
        const {name, value} = e.target

        setRegisterationData({
            ...registerationData,
            [name]: value
        });
    }

    function getImage(event){
        event.preventDefault();

        const uploadedImage = event.target.files[0];

        if(uploadedImage){
            setRegisterationData({
                ...registerationData,
                avatar: uploadedImage
            });

            const fileReader = new FileReader();

            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener('load', function (){
                setPreviewImage(this.result);
            })
        }
    }

    async function userRegister(event){
        event.preventDefault();

        if(!registerationData.fullName || !registerationData.email || !registerationData.password || !registerationData.enrolmentNo || !registerationData.branch || !registerationData.avatar){
            toast.error("Please provide all details...");
            return;
        }

        if(registerationData.fullName.length<5){
            toast.error('Name shuld be atleast 5 characters');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(registerationData.email)) {
            toast.error("Invalid Email Id");
            return;
        }

        if(!registerationData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            toast.error('Password must contain Minimum 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character')
            return;
        }

        const formData = new FormData();

        formData.append('fullName', registerationData.fullName);
        formData.append('email', registerationData.email);
        formData.append('password', registerationData.password);
        formData.append('branch', registerationData.branch);
        formData.append('enrolmentNo', registerationData.enrolmentNo);

        const response = await dispatch(registerUser(formData));

        if(response?.payload?.success){
            navigate('/profile');
        }

        setRegisterationData({
            fullName: '',
            email: '',
            password: '',
            enrolmentNo: '',
            branch: '',
            avatar: ''
        });
    }

    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
                <div className="card w-full max-w-5xl bg-base-200 shadow-2xl border border-base-300 lg:grid lg:grid-cols-2 overflow-hidden">

                    {/* Left Side */}
                    <div className="hidden md:flex flex-col justify-center bg-primary text-primary-content p-10">
                        <h1 className="text-5xl font-black mb-4 font-primary">NitKeChhore</h1>

                        <p className="text-sm opacity-90 leading-8 font-secondary">
                            Join the biggest student community of NIT Agartala.
                        </p>

                        <div className="mt-10 space-y-4 font-secondary">
                            <div className="flex items-center gap-3">
                                <MdVerified className="text-2xl"/> Student Verification
                            </div>

                            <div className="flex items-center gap-3">
                                <IoBookSharp className="text-2xl"/> Get Access to Exclusive Notes
                            </div>

                            <div className="flex items-center gap-3">
                                <IoCodeSlashSharp className="text-2xl" /> Coding
                            </div>

                            <div className="flex items-center gap-3">
                                <FaUserFriends className="text-2xl"/> Connect with Students
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-primary font-primary">
                                Register Yourself
                            </h2>

                            <p className="text-base-content/70 mt-2 font-secondary">
                                Create your NitKeChhore account.
                            </p>
                        </div>

                        <form noValidate onSubmit={userRegister} className="space-y-5 font-primary">
                            {/*Profile Picture */}
                            <label htmlFor="image_uploads" className="cursor-pointer">
                                {previewImage ? (
                                    <img  className="w-28 h-28 rounded-full border-4 border-primary object-cover transition-all duration-300 group-hover:scale-105 m-auto" src={previewImage}/>
                                ) : <BsPersonCircle className="w-28 h-28 text-primary mb-3 transition-all duration-300 group-hover:scale-150 rounded-full m-auto"/>}
                            </label>
                            <input 
                                type="file" 
                                className="hidden"
                                name="image_uploads"
                                id="image_uploads"
                                accept=".jpg, .jpeg, .png, .svg"
                                onChange={getImage}
                            />
                            {/* Full Name */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <User size={18} />
                                <input 
                                    type="text" 
                                    name="fullName"
                                    className="grow" 
                                    placeholder="Full Name" 
                                    onChange={handelUserInput}
                                    value={registerationData.fullName}
                                />
                            </label>

                            {/* Email */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <Mail size={18} />
                                <input
                                    type="email"
                                    className="grow"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handelUserInput}
                                    value={registerationData.email}
                                />
                            </label>

                            {/* Password */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <Lock size={18} />
                                <input
                                    type="password"
                                    className="grow"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handelUserInput}
                                    value={registerationData.password}
                                />
                            </label>

                            {/* Enrolment */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <Hash size={18} />
                                <input
                                    type="text"
                                    className="grow"
                                    name="enrolmentNo"
                                    placeholder="Enrolment Number"
                                    onChange={handelUserInput}
                                    value={registerationData.enrolmentNo}
                                />
                            </label>

                            {/* Branch */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <GraduationCap size={18} />
                                <input 
                                    type="text" 
                                    className="grow" 
                                    name="branch"
                                    placeholder="Branch" 
                                    onChange={handelUserInput}
                                    value={registerationData.branch}
                                />
                            </label>

                            <button className="btn btn-primary w-full mt-4 text-lg">
                                Create Account
                            </button>

                            <div className="divider">OR</div>

                            <p className="text-center text-sm mt-5">
                                Already have an account?{" "}
                                <Link to={'/user/login'}>
                                    <span className="text-primary font-semibold cursor-pointer hover:underline">
                                        Login
                                    </span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Registration;
