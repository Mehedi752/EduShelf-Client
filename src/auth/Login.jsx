import { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import axios from 'axios'
import useAuth from '../customHooks/useAuth'

const Login = () => {
    const { signInUser, setUser, signInWithGoogle } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState({});
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();


    const handleLogInWithGoogle = () => {

        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                const user = { email: result.user.email }
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true,
                })
                    .then(res => {
                        console.log(res.data);
                    })

                navigate(location?.state ? location.state : '/');
                toast.success(`Congrats ${result.user.displayName}, Your Login Success in The Job Portal Website!`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",
                });

            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
            })

    }

    const handleLogin = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get('email')
        setEmail(email)
        const password = formData.get('password')

        signInUser(email, password)
            .then(result => {
                console.log(result)
                setUser(result.user)
                toast.success(`Congrats ${result.user.displayName}, Your Login Success in The Job Portal Website!`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",

                });
                setErrorMessage({ ...error, message: error.code })
            })
    }

    const handleForgotPassword = () => {
        navigate('/auth/forgot-password', { state: emailRef.current.value });
    }

    return (
        <div className="bg-[#f3f3f3] pb-[70px]">
            <div className="container mx-auto py-10 lg:py-[50px]">
                <div className="mb-12">
                    <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                        <IoMdArrowBack /> Back to home</Link>
                </div>
                <div className='lg:px-[300px] px-10'>
                    <div className='bg-white px-12 lg:px-[96px] py-8 lg:py-[76px]'>
                        <h3 className='text-center text-[#403f3f] text-[24px] lg:text-[35px] font-semibold'>
                            Login your account
                        </h3>

                        <div className='border-t my-12'></div>

                        <div className=''>
                            <form onSubmit={handleLogin} className=''>
                                <div className='form-control mb-6'>
                                    <label className='label'>
                                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                                            Email Address
                                        </span>
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        ref={emailRef}
                                        placeholder='Enter your email address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                                        required
                                    />
                                </div>
                                <div className='form-control relative'>
                                    <label className='label'>
                                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder='Enter your password'
                                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                                        required
                                    />

                                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-4 bottom-12'>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </div>
                                    {errorMessage.message ? (
                                        <p className='text-red-600 mt-3 text-xs'>
                                            {errorMessage.message}
                                        </p>
                                    ) : (
                                        <label className='label'>
                                            <button onClick={handleForgotPassword} className='label-text-alt link link-hover'>
                                                Forgot password?
                                            </button>

                                        </label>
                                    )}
                                </div>
                                <div className='form-control mt-6 mb-8'>
                                    <button className='btn text-white bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[5px] border-none'>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

                        <h3 className='text-[#706f6f] text-center text-base font-semibold'>
                            Don’t Have An Account ?{' '}
                            <Link className='text-red-600 underline' to={'/auth/register'}>
                                Create an account
                            </Link>
                        </h3>

                        <div className="mt-6 flex items-center">
                            <div className="border-t-2 w-[40%]"></div>
                            <h3 className="w-[20%] text-center font-semibold">Or</h3>
                            <div className="border-t-2 w-[40%]"></div>
                        </div>

                        <div className="">
                            <button onClick={handleLogInWithGoogle} className="btn bg-white rounded-full border border-black/50 w-full mt-6">
                                <FcGoogle className='text-lg' />
                                <p className="text-xs md:text-base"> Continue with Google</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login