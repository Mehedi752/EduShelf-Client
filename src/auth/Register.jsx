import { useContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import useAuth from '../customHooks/useAuth';

const Register = () => {

    //Desctructure the AuthContext
    const { createNewUser, user, setUser, updateProfileUser, signInWithGoogle } = useAuth();

    const [error, setError] = useState({})
    const navigate = useNavigate();
    const location = useLocation();

    //Password Regular Expression
    const passwordRegeX = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const [showPassword, setShowPassword] = useState(false);


    //Handle Google Sign In
    const handleLogInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                //console.log(result.user)
                setUser(result.user);
                const name = result.user.displayName,
                    photo = result.user.photoURL,
                    email = result.user.email,
                    createdTime = result.user.metadata.creationTime;
                const newUser = { name, photo, email, createdTime }
        

                navigate(location?.state ? location.state : '/');
                toast.success(`Congrats ${result.user.displayName} Your Login Success With Google in The EduShelf Library!`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",
                });
            })
            .catch(error => {
                console.error(error)
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",
                });
            })

    }


    const handleRegister = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        const name = data.get('name')
        const photo = data.get('photo')
        const email = data.get('email')
        const password = data.get('password')
        const terms = event.target.terms.checked;


        setError({ ...error, message: '' });
        if (!terms) {
            setError({ ...error, message: 'Please accept our terms and conditions' });
            return;
        }

        if (!name || !photo || !email || !password) {
            setError({ ...error, message: 'Please fill all the fields' })
            return
        }

        if (password.length < 6) {
            setError({ ...error, message: 'Password must be at least 6 characters' })
            return
        }


        if (!email.includes('@')) {
            setError({ ...error, message: 'Invalid email address' })
            return
        }

        if (!photo.includes('http')) {
            setError({ ...error, message: 'Invalid photo url' })
            return
        }

        if (!passwordRegeX.test(password)) {
            setError({ ...error, message: 'Password must be at least one capital letter, at least one small letter and at least 6 characters.' });
            return;
        }



        const user = { name, photo, email, password }
        ////console.log(user)

        createNewUser(email, password)
            .then(result => {
                setUser(result.user)
                const createdTime = result.user.metadata.creationTime;
                const newUser = { name, photo, email, createdTime }
             

                updateProfileUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                        toast.success(`Congrats ${result.user.displayName},Your Register Success in The The EduShelf Library!`, {
                            position: "top-center",
                            autoClose: 2000,
                            pauseOnHover: true,
                            theme: "colored",
                        });
                    })
                    .catch(error => {
                        console.error(error)
                        toast.error(`${error.message}`, {
                            position: "top-center",
                            autoClose: 2000,
                            pauseOnHover: true,
                            theme: "colored",
                        });
                    })
            })
            .catch(error => {
                //console.log(error);
                toast.error(`${error.message}`, {
                    position: "top-center",
                    autoClose: 2000,
                    pauseOnHover: true,
                    theme: "colored",
                });
            })
    }

    return (
        <div className="bg-[#f3f3f3] pb-[70px] px-5 lg:px-0">

            <div className="container mx-auto py-10 lg:py-[50px]">
                <div className="mb-12">
                    <Link to={"/"} className="text-gray-700 flex items-center gap-2 text-3xl font-normal font-['Rancho']">
                        <IoMdArrowBack /> Back to home</Link>
                </div>
                <div className='px-10 lg:px-[300px]'>

                    <div className='bg-white px-12 lg:px-[80px] py-8 lg:py-[60px]'>
                        <h3 className='text-center text-[#403f3f] text-[24px] lg:text-[35px] font-semibold'>
                            Register your account
                        </h3>

                        <div className='border-t my-10'></div>

                        <div className=''>
                            <form onSubmit={handleRegister} className=''>
                                <div className='form-control mb-6'>
                                    <label className='label'>
                                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Enter your name'
                                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                                        required
                                    />
                                </div>

                                <div className='form-control mb-6'>
                                    <label className='label'>
                                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                                            Photo URL
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        name='photo'
                                        placeholder='Enter your photo url'
                                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                                        required
                                    />
                                </div>

                                <div className='form-control mb-6'>
                                    <label className='label'>
                                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-4'>
                                            Email Address
                                        </span>
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Enter your email address'
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

                                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-4 bottom-4'>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </div>

                                </div>

                                <div className='flex gap-2 mt-2'>
                                    <input type="checkbox" name="terms" className="" required />
                                    <span className="text-xs label-text">Accept our terms and conditions</span>
                                </div>

                                {error.message && (
                                    <p className='text-red-600 mt-3 text-xs'>{error.message}</p>
                                )}
                                <div className='form-control mt-6 mb-8'>
                                    <button className='btn text-white bg-gradient-to-r from-cyan-500 to-blue-500  rounded-[5px] border-none'>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>

                        <h3 className='text-[#706f6f] text-center text-base font-semibold'>
                            Already Have An Account ?{' '}
                            <Link className='text-red-600 underline' to={'/auth/login'}>
                                Login
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

export default Register;