import React, { useEffect } from "react";
import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { action } from "~/routes/logout";
import { useState } from "react";
import logo from "../../public/assets/Code_Haven_Logo.png"
//Nav Bar for the website

const NavBar = () => {
    const user = useOptionalUser();
    const [state, setState] = useState<number>(0);
    if (user) {
        var email = user.email;
        var newStr = email.split("@")[0];
    }

    useEffect(()=> {
        (state == 1 ? setState(1) : setState(1))
    },[])
    return (
        <div className="navbar h-24 bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} 
                className="menu menu-compact dropdown-content mt-3 
                p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li><Link to="home" className="">Home</Link></li>
                    <li><Link to="courses" className="">Courses</Link></li>
                    <li><Link to="resources" className="">Resources</Link></li>
                    <li><Link to="blog" className="">Blogs</Link></li>
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost h-fit normal-case" onClick={(ev) => setState(1)}>
                    <img src={logo} className="w-64" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-montserrat menu-horizontal px-1 font-semibold gap-6">
                    <li>
                        <Link 
                        to="/" 
                        className=
                        {`relative bg-white hover:bg-white w-32 
                        justify-center a after:bg-gradient-to-r 
                        after:from-orange-500 no-animation after:to-amber-500 
                        ${state==1 ? 'after:bg-none after:bg-green-300 after:w-full' : ''}`
                        } 
                        onClick={(ev) => setState(1)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="courses" 
                        className=
                        {`relative bg-white hover:bg-white w-32 
                        justify-center a after:bg-gradient-to-r 
                        after:from-orange-500 no-animation after:to-amber-500 
                        ${state==2 ? 'after:bg-none after:bg-green-300 after:w-full' : ''}`
                        } 
                        onClick={(ev) => setState(2)}
                        >
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="resources" 
                        className=
                        {`relative bg-white hover:bg-white w-32 
                        justify-center a after:bg-gradient-to-r 
                        after:from-orange-500 no-animation after:to-amber-500 
                        ${state==3 ? 'after:bg-none after:bg-green-300 after:w-full' : ''}`
                        } 
                        onClick={(ev) => setState(3)}
                        >
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="blogs" 
                        className=
                        {`relative bg-white hover:bg-white w-32 
                        justify-center a after:bg-gradient-to-r 
                        after:from-orange-500 no-animation after:to-amber-500 
                        ${state==4 ? 'after:bg-none after:bg-green-300 after:w-full' : ''}`
                        } 
                        onClick={(ev) => setState(4)}
                        >
                            Blogs
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="menu menu-horizontal font-montserrat px-1 gap-2">
                        <Link to="/account" 
                        className="
                        hover:text-blue-500 transition duration-300 
                        my-auto text-sm normal-case"
                        >
                            {newStr}
                        </Link>
                        <Link to="courses" 
                        className="
                        btn h-6 w-40 bg-orange-300 border-0"
                        >
                            Get Started!
                        </Link>
                    </div>
                ) : (
                    <ul tabIndex={0} className="menu menu-horizontal font-montserrat px-1 gap-2">                     
                        <Link to="login" className="btn w-24 btn-ghost">Log In</Link>
                        <Link to="join" 
                        className="
                        btn w-24 border-0  hover:bg-opacity-40 
                        hover:bg-violet-500 bg-orange-300"
                        >
                            Sign up
                        </Link>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default NavBar;
