import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/Fc';
import { AiFillGithub } from 'react-icons/Ai';

const Login = () => {

    const { signIn, signInWithGoogle,signInWithGithub } = useContext(AuthContext);

    const [error,setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
             setError(error.message)   
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGitHubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-amber-500">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-amber-200">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-400 border-0">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        New to FOODIE?
                        <Link to="/register" className="label-text-alt link link-hover">
                            Please Register
                        </Link>
                    </p>

                </div>
                <p className='text-red-500'> {error}</p>
                <div className='flex justify-center items-center border-amber-500 mt-5'>
                    <FcGoogle className='w-6 h-6'></FcGoogle>
                    <button onClick={handleGoogleSignIn}><Link className="ps-2 link-hover"> Login with Google</Link></button>
                </div>
                <div className='flex justify-center items-center border-amber-500 '>
                    <AiFillGithub className='w-6 h-6'></AiFillGithub>
                    <button onClick={handleGitHubSignIn}><Link className="ps-2 link-hover"> Login with Github</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Login;