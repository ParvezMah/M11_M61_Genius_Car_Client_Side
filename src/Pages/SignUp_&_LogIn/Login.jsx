import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImage from '../../../public/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/Authprovider';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const {signIn} = useAuth();
    // const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const user = {email};
                
                // Get Access Token
                axios.post('https://module-58-genius-car-server-side.vercel.app/jwt', user, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                    if(res.data.success){
                        navigate(location?.state ? location?.state : '/')
                    }
                })
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={LoginImage} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h3 className="text-3xl font-bold text-center">Login Page</h3>
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center my-4 text-xl'>New to Genius Car? <Link to='/signup' className='font-bold underline text-orange-500'>Sign Up</Link></p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;