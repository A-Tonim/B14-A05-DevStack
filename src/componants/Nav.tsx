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
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;