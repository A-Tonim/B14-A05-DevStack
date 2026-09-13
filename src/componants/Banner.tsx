import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="min-h-[500px] container mx-auto flex items-center justify-center ">
            <div>
                        <p>Build Your Ideal</p>
                        <p>Development Stack</p>
                    
                        <p>Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>

                        <button>Explore Technologies</button>
                        <button>Learn More</button>
            </div>
            <img src={banner} alt="banner" className="hidden md:block object-cover" />  
            
        </div>
    );
};

export default Banner;