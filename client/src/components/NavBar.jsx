import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav className="flex justify-between items-center bg-zinc-800 p-4">
            <h1 className="text-white text-xl font-bold">Home Page</h1>
            <div className="flex space-x-4">
                <Link to="http://localhost:5173/register">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
                        Sign Up
                    </button>
                </Link>
                <Link to="http://localhost:5173/login">
                    <button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">
                    Sign In
                    </button>
                </Link>
            </div>
    </nav>
    )
}
export default NavBar