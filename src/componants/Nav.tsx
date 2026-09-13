import logo from "../assets/logo-text.png";


const Nav = () => {
    return (
        <div >
            <nav className="flex items-center justify-between p-4 container mx-auto">
                <img src={logo} alt="Logo" />
                <ul className="flex space-x-4">
                    <li className="text-red-500"><a href="/">Home</a></li>
                    <li><a href="/technologies">Technologies</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 rounded-md font-semibold text-sm text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">Sign In</button>
                    <button className="btn btn-secondary px-4 py-2 rounded-md font-semibold text-sm text-white  hover:-translate-y-0.5 transition-transform">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;