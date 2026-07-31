import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200 px-6 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl bottom-0 right-0"></div>

            <div className="relative z-10 max-w-2xl text-center">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-primary tracking-wider font-primary">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mb-4 text-3xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-primary">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-base-content/70 text-lg leading-relaxed font-secondary">
                    Oops! The page you're looking for doesn't exist, may have
                    been moved, or the URL might be incorrect.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

                    <Link
                        to="/"
                        className="btn btn-primary rounded-xl px-8 font-primary"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline rounded-xl px-8 font-primary"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                </div>

                {/* Footer Text */}
                <p className="mt-10 text-sm text-base-content/50 font-primary">
                    Error Code: <span className="font-semibold">404</span>
                </p>

            </div>
        </section>
    );
};

export default NotFound;