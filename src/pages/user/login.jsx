import { Lock, Mail } from "lucide-react";
import MainLayout from "../../layout/mainLayout.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../../applicationStates/reduxSlices/userAuthSlice";

function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    function handelUserInput(e){
        const {name, value} = e.target

        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    async function userLogin(event){
        event.preventDefault();

        if(!loginData.email || !loginData.password){
            toast.error("Please provide both email and password.")
            return;
        }

        // const formData = new FormData();

        // formData.append('email', loginData.email);
        // formData.append('password', loginData.password);

        const response = await dispatch(login(loginData));

        if(response?.payload?.success){
            navigate('/');
        }

        setLoginData({
            email: '',
            password: ''
        });
    }

    return (
        <MainLayout>
            <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
                <div className="card w-full max-w-5xl bg-base-200 shadow-2xl border border-base-300 lg:grid lg:grid-cols-2 overflow-hidden">
                    {/* Left Side */}
                    <div className="hidden md:flex flex-col justify-center bg-primary text-primary-content p-10">
                        <p className="font-secondary">Welcom Back to,</p>
                        <h1 className="text-5xl font-black mb-4 font-primary">NitKeChhore</h1>

                        <p className="text-sm opacity-90 leading-8 font-secondary">
                            Enjoy the world class self paced learning experience!!
                        </p>
                    </div>
                    {/* Right Side */}
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-primary font-primary">
                                Login
                            </h2>

                            <p className="text-base-content/70 mt-2 font-secondary">
                                to your NITKeChhore account.
                            </p>
                        </div>

                        <form noValidate onSubmit={userLogin} className="space-y-5 font-primary">
                            {/* Email */}
                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <Mail size={18} />
                                <input
                                    type="email"
                                    className="grow"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handelUserInput}
                                    value={loginData.email}
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
                                    value={loginData.password}
                                />
                            </label>

                            <button className="btn btn-primary w-full mt-4 text-lg">
                                Login
                            </button>

                            <div className="divider">OR</div>

                            <p className="text-center text-sm mt-5">
                                Don't have an account?{" "}
                                <Link to={'/user/register'}>
                                    <span className="text-primary font-semibold cursor-pointer hover:underline">
                                        Signup
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
export default Login;