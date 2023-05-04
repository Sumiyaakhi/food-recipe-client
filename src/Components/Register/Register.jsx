import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {

    const { user, createUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState("")
    const emailRef = useRef()
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password,image);

        // validation
        setError('');
        setSuccess('');
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least two uppercase.');
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add a special character.');
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    setSuccess('User login successful.');
                    setError('');
                }



                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="file" id="photo" name='photo' accept='image/*' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <p className='text-red-500'> {error}</p>
                <p className='text-green-500'>{success}</p>
            </div>
        </div>
    );
};

export default Register;