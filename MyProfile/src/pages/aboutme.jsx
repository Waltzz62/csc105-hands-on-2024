const AboutMe = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-20">
             {/* Left Section - Profile image */}
             <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                <img src="src/image/kidCho-removebg-preview.png" alt="Profile" className="w-60 md:w-80 lg:w-96 rounded-lg shadow-lg transition-transform transform hover:scale-105" />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-lg md:text-xl font-medium">Chokun</h2>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">Woraprat Chaikeenee</h1>
                <p className="text-md md:text-lg font-medium mt-2">I'm just an ordinary boy who left my hometown in the east of Thailand, Sa Kaeo province. 
                    I've been studying away from home since Grade 7 in Chonburi, and now I'm pursuing a degree in Computer Science at KMUTT.
                </p>
                <p className="text-md md:text-lg font-medium mt-2">My dream? To become wealthy and create something meaningful for the next generation. 💡🚀
</p>
                {/* Portfolio Button */}
                <div className="mt-6">
                    <button className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition-all">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;