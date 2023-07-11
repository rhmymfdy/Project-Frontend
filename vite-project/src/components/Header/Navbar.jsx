import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const nav = ()=>{

    const navigasi = useNavigate()
    const [navbar, setNavbar] = useState(false)

    const param = useParams()

    const LogOut = async(e) => {
        e.preventDefault()
        try {
            await axios.delete('http://localhost:5000/logout')
            navigasi('/')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className="w-full bg-white shadow fixed z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold text-grey">Umega Studio</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-grey"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-grey"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-grey hover:text-indigo-200">
                                <Link to={`/home`}>Home</Link>
                            </li>
                            <li className="text-grey hover:text-indigo-200">
                                <Link to={`/Package`}>Package</Link>
                            </li>
                            <li className="text-grey hover:text-indigo-200">
                                <Link to={'/frame'}>Shop</Link>
                            </li>
                            <li className="text-grey hover:text-indigo-200">
                                <Link to={'/galeri'}>Galery</Link>
                            </li>
                            <li className="text-grey hover:text-indigo-200">
                                <Link to={'/kontak'}>Contact US</Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:hidden">

                        
                        <Link className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800" to={"/Login"}>Logn In</Link>
                    <Link
                        to="/SignUp"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </Link> 
                    <button className="px-4 py-2 w-full text-gray-800 bg-white rounded-md shadow hover:bg-gray-100" onClick={LogOut}>Log Out</button>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                        <Link className="px-4 py-2 text-white bg-blue-700 rounded-md shadow hover:bg-gray-800" to={"/Login"}>Logn In</Link>
                    <Link
                        to="/SignUp"
                        className="px-4 py-2 text-white bg-blue-700 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign Up
                    </Link>
                    <button className="px-4 py-2 text-white bg-zinc-700 rounded-md shadow hover:bg-gray-800" onClick={LogOut} >Log Out</button>
                </div>
            </div>
        </nav>
    );
}

export default nav