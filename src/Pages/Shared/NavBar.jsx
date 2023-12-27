import { Link } from "react-router-dom";
import Logo from '../../../public/logo.svg'
import UserIcon from '../../../public/icons/UserIcon.png'
import useAuth from "../../Hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/Authprovider";

const NavBar = () => {
    const {logOut, user} = useAuth();
    // const {logOut, user} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
            .then(()=>{
            })
            .catch(err =>{
                console.error(err);
        })
    }

    const navItems = <>
                        <li className="text-2xl"><Link to="/">Home</Link></li>
                        <li className="text-2xl"><Link to="/about">About</Link></li>
                        {
                            user?.email 
                                ? <>
                                        <li className="text-2xl"><Link to="/bookings">My Bookings</Link></li>
                                        <li className="text-2xl"><button onClick={handleLogOut}>Log Out</button></li>
                                  </>
                                : <li className="text-2xl"><Link to="/login">Log In</Link></li>       
                        }
                     </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
                <img src={Logo} alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navItems}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user && <img src={UserIcon} alt="" className="h-[50px] mr-4" />
            }
            <p className="mr-4 text-2xl">
                {/* {user ? user.email : ""} */}
            </p>
            <button className="btn btn-outline btn-warning text-2xl">Appointment</button>
        </div>
</div>
    );
};

export default NavBar;