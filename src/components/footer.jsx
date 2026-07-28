import { AiOutlineInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";


function Footer() {
   
    return (
        <footer className="flex flex-col items-center">
            <nav className="footer sm:footer-horizontal bg-base-300 text-base-content p-15 flex justify-between  md:flex-row flex-col items-center">
                <nav>
                    <h6 className="footer-title font-primary ">Services</h6>
                    <a className="link link-hover font-secondary">Branding</a>
                    <Link className="link link-hover font-secondary">Design</Link>
                    <Link className="link link-hover font-secondary">Marketing</Link>
                    <Link className="link link-hover font-secondary">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title font-primary">Company</h6>
                    <Link to="/about" className="link link-hover font-secondary"> About Us</Link>
                    <Link to="/contact" className="link link-hover font-secondary"> Contact</Link>
                    <Link to="/jobs" className="link link-hover font-secondary"> Jobs</Link>
                    <Link to="/presskit" className="link link-hover font-secondary"> Press Kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title font-primary">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                    <a>
                        <AiOutlineInstagram className="text-4xl hover:text-blue-500 cursor-pointer transition-all duration-300"/>
                    </a>
                    <a>
                        <MdAlternateEmail className="text-4xl hover:text-blue-500 cursor-pointer transition-all duration-300"/>
                    </a>
                    <a>
                        <ImYoutube2 className="text-4xl hover:text-blue-500 cursor-pointer transition-all duration-300"/>
                    </a>
                    </div>
                </nav>
            </nav>
            <p className="m-2">Made with ❤️ by NIT Agartala Students</p>
        </footer>
    );
}

export default Footer;
