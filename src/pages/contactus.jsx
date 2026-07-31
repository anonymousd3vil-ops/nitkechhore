import MainLayout from "../layout/mainLayout.jsx";
import { Send } from "lucide-react";
import { FaMapLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {contactusSubmit} from '../applicationStates/reduxSlices/contactUsSlice.js'

function ContactUs(){
    const dispatch = useDispatch();
    
    const [queryData, setQueryData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    
    function handelUserInput(e){
        const {name, value} = e.target

        setQueryData({
            ...queryData,
            [name]: value
        });
    }

    async function submitQuery(event) {
        event.preventDefault();
        
        try{
            if(!queryData.email || !queryData.subject || !queryData.message){
                toast.error("Please provide all the details.")
                return;
            }
        
            await dispatch(contactusSubmit(queryData));
        }catch(err){
            console.log(err.message)
            toast.error("Qwery not submistted, Try Again Later")
        }

        setQueryData({
            email: '',
            subject: '',
            message: '',
        })
    }
    
    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
                <div className="card w-full max-w-5xl bg-base-200 shadow-2xl border border-base-300 lg:grid lg:grid-cols-2 overflow-hidden">

                    {/* Left Side */}
                    <div className="hidden md:flex flex-col justify-center bg-primary text-primary-content p-10">
                        <p className="font-secondary">Contact To,</p>
                        <h1 className="text-5xl font-black mb-4 font-primary">NitKeChhore</h1>

                        <p className="text-sm opacity-90 leading-8 font-secondary">
                            We will love to hear few words from you.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-start font-primary flex-col">
                                <div className="flex gap-3 items-center font-bold">
                                    <FaMapLocationDot className="text-3xl"/> Address
                                </div>
                                <div className="relative top-0 left-10">
                                    Block B, Aryabhatta Boys Hostel, Jirania, National Institute of Technology, Agartala, Tripura, India - 799046 
                                </div>
                            </div>
                            

                            <div className="flex items-start font-primary flex-col">
                                <div className="flex gap-3 items-center font-bold">
                                    <FaPhoneFlip className="text-3xl"/> Phone
                                </div>
                                <div className="relative top-0 left-10">
                                    +91 9856734519
                                </div>
                            </div>

                            <div className="flex items-start font-primary flex-col">
                                <div className="flex gap-3 items-center font-bold">
                                    <AiTwotoneMail className="text-3xl"/> Email
                                </div>
                                <div className="relative top-0 left-10">
                                    nanduthecoder@gmail.com
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="p-8 md:p-12">
                        {/* Heading */}
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-primary font-primary">
                                Contact Directly
                            </h2>

                            <p className="text-base-content/70 mt-3 font-secondary">
                                Have a suggestion, feedback, or issue? We'd love to hear from you.
                            </p>
                        </div>

                        <form noValidate onSubmit={submitQuery} className="space-y-6">

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold font-primary">Email</span>
                                </label>

                                <label className="input input-bordered flex items-center gap-3 hover:border-primary focus-within:border-primary transition-all duration-300">
                                    
                                    <input
                                        type="email"
                                        name='email'
                                        className="grow font-primary"
                                        placeholder="raju@example.com"
                                        onChange={handelUserInput}
                                        value={queryData.email}
                                    />
                                </label>
                            </div>

                            {/* Subject */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold font-primary">Subject</span>
                                </label>

                                <label className="input input-bordered flex items-center gap-3 hover:border-primary focus-within:border-primary transition-all duration-300">
                                    
                                    <input
                                        type="text"
                                        name='subject'
                                        className="grow font-primary"
                                        placeholder="Enter subject"
                                        onChange={handelUserInput}
                                        value={queryData.subject}
                                    />
                                </label>
                            </div>

                            {/* Message */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold font-primary">Message</span>
                                </label>

                                <div className="relative">
                                    

                                    <textarea
                                        rows={6}
                                        name='message'
                                        placeholder="Write your message here..."
                                        className="textarea font-primary textarea-bordered w-full pl-5 pt-4 hover:border-primary focus:border-primary transition-all duration-300 resize-none"
                                        onChange={handelUserInput}
                                        value={queryData.message}
                                    />
                                </div>

                                <label className="label">
                                    <span className="label-text-alt text-base-content/50 font-primary">
                                        Maximum 500 characters
                                    </span>
                                </label>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full text-lg font-primary"
                            >
                                <Send size={18} />
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ContactUs;