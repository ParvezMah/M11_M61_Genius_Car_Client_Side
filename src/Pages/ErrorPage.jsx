import { Link } from 'react-router-dom';
import Image404 from '../../public/images/banner/404.png'
import NavBar from './Shared/NavBar';

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=''>
                <div>
                    <img className='w-2/4 mx-auto' src={Image404} alt="" />
                </div>
                <div className='flex justify-center my-10'>
                    <h3 className="text-5xl text-center font-bold">This Page is not ready yet</h3>
                </div>
                <div className='flex justify-center'>
                    <Link to='/'><button className=' text-3xl text-white btn btn-accent'>Go Back</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;