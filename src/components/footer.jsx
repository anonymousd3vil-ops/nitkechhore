import { AiOutlineInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { commonHoverEffect } from "../styles/commonStyles.js";

function Footer() {
   
    return (
        <footer className="flex flex-col items-center">
            <nav className="footer sm:footer-horizontal bg-base-300 text-base-content p-15 flex md:justify-between md:flex-row flex-col md:items-start">
                <nav>
                    <h6 className="footer-title font-primary ">Services</h6>
                    <Link to={'/compiler'} className={commonHoverEffect}>Online Compiler</Link>
                    <Link className={commonHoverEffect}>Design</Link>
                    <Link className={commonHoverEffect}>Marketing</Link>
                    <Link className={commonHoverEffect}>Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title font-primary">Company</h6>
                    <Link to="/about" className={commonHoverEffect}> About Us</Link>
                    <Link to="/contact" className={commonHoverEffect}> Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title font-primary">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a>
                        <AiOutlineInstagram className="text-4xl hover:text-[#2f7f8a] cursor-pointer transition-all duration-300"/>
                    </a>
                    <a>
                        <MdAlternateEmail className="text-4xl hover:text-[#2f7f8a] cursor-pointer transition-all duration-300"/>
                    </a>
                    <a>
                        <ImYoutube2 className="text-4xl hover:text-[#2f7f8a] cursor-pointer transition-all duration-300"/>
                    </a>
                    </div>
                </nav>
            </nav>
            <p className="m-2">Made with ❤️ by NIT Agartala Students</p>
        </footer>
    );
}

export default Footer;
