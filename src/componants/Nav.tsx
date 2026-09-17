import logo from "../assets/logo-text.png";


const Nav = () => {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-5 py-3">
            <nav className="flex items-center justify-between p-4 container mx-auto">
                <img src={logo} alt="Logo" />
                <div className="flex space-x-4">
                    <p className="text-red-500"><a href="/">Home</a></p>
                    <p><a href="/technologies">Technologies</a></p>
                    <p><a href="/projects">Projects</a></p>
                    <p><a href="/about">About</a></p>
                    <p><a href="/contact">Contact</a></p>
                </div>
                
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 rounded-md font-semibold text-sm text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">Sign In</button>
                    <button className="btn btn-secondary px-4 py-2 rounded-md font-semibold text-sm text-white  hover:-translate-y-0.5 transition-transform">Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;