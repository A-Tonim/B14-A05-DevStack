import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="min-h-[500px] container mx-auto flex items-center justify-center gap-10 flex-col-reverse lg:flex-row">
            <div>
                        <p className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">Build Your Ideal
                        <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                        </p>
                        <p className="text-lg text-gray-600">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-3 rounded-md font-semibold text-white text-sm
                        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
                        shadow-lg shadow-purple-300 hover:-translate-y-0.5 transition-transform">Explore Technologies</button>
                        <button className="px-6 py-3 rounded-md font-semibold text-sm text-gray-900
                        bg-white border border-gray-300 hover:bg-gray-50 transition-colors">Learn More</button>
           
                        </div>

             </div>
              <img src={banner} alt="banner" className="hidden sm:block md:block object-cover" />  
            
        </div>
    );
};

export default Banner;