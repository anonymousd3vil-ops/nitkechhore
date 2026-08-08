import { AiOutlineInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { commonHoverEffect } from "../styles/commonStyles.js";

function Footer() {

    return (
        <footer className="bg-base-300 border-t border-base-content/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="footer sm:footer-horizontal text-base-content flex md:flex-row flex-col md:justify-between gap-12">
                    <nav>
                        <h6 className="footer-title font-primary text-base">
                            Services
                        </h6>
                        <Link
                            to="/compiler"
                            className={`${commonHoverEffect} transition-all duration-300`}
                        >
                            Online Compiler
                        </Link>
                        <Link
                            to="/notes"
                            className={`${commonHoverEffect} transition-all duration-300`}
                        >
                            Notes
                        </Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title font-primary text-base">
                            Company
                        </h6>
                        <Link
                            to="/about"
                            className={`${commonHoverEffect} transition-all duration-300`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className={`${commonHoverEffect} transition-all duration-300`}
                        >
                            Contact Us
                        </Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title font-primary text-base">
                            Social
                        </h6>
                        <div className="flex gap-5">
                            <Link
                                to="https://www.instagram.com/nitkechhore"
                                target="_blank"
                                className="p-3 rounded-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <AiOutlineInstagram className="text-2xl hover:text-[#E1306C]" />
                            </Link>
                            <Link
                                className="p-3 rounded-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <MdAlternateEmail className="text-2xl hover:text-[#0EA5E9]" />
                            </Link>
                            <Link
                                className="p-3 rounded-full bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <ImYoutube2 className="text-2xl hover:text-[#FF0000]" />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="divider my-8"></div>
                <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                    <p className="text-sm text-base-content/70 font-secondary">
                        Made with ❤️ by NIT Agartala Students
                    </p>
                    <p className="text-sm text-base-content/50">
                        © {new Date().getFullYear()} NITKeChhore. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;