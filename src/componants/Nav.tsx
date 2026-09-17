import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-text.png";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <> 
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-5 py-3">
            <nav className="flex items-center justify-between p-4 container mx-auto">
                 <button className="md:hidden" onClick={() => setIsOpen(true)}>
                  <Menu className="w-6 h-6" />
                  </button>
    <img src={logo} alt="Logo" />

                        <div className="hidden md:flex space-x-4">
                            <p className="text-red-500"><a href="/">Home</a></p>
                            <p><a href="/technologies">Technologies</a></p>
                            <p><a href="/projects">Projects</a></p>
                            <p><a href="/about">About</a></p>
                            <p><a href="/contact">Contact</a></p>
                        </div>
                        
                    <div className="hidden md:flex items-center space-x-4">
                    <button className="px-4 py-2 rounded-md font-semibold text-sm text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                    Sign In
                    </button>
                    <button className="btn btn-secondary px-4 py-2 rounded-md font-semibold text-sm text-white hover:-translate-y-0.5 transition-transform">
                    Sign Up
                    </button>
                </div>

                 

                
            </nav>
            
        </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50
                    transform transition-transform duration-300
                    flex flex-col gap-4 p-6
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="self-end" onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5" />
        </button>
        <p className="text-red-500"><a href="/">Home</a></p>
        <p><a href="/technologies">Technologies</a></p>
        <p><a href="/projects">Projects</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/contact">Contact</a></p>
      </aside>
        </>
       );
};

export default Nav;