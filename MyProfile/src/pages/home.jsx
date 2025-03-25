const Home = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-20">
            {/* Left Section - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-lg md:text-xl font-medium">Hello, Everyone!</h2>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">Woraprat Chaikeenee</h1>
                <p className="text-md md:text-lg font-semibold mt-2">I'm a CS student</p>
                <p className="text-black font-medium mt-4 text-sm md:text-base">
                Keep your backpack ready and set off on an adventure in my world! 🚀🌍
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                    <a href="https://web.facebook.com/shaqsho.worpgzk/?locale=th_TH">
                        <img className="w-10 md:w-12 shadow-md transition-transform transform hover:scale-110" src="src/icons/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/worrrapratch/">
                        <img className="w-10 md:w-12 shadow-md transition-transform transform hover:scale-110" src="src/icons/instagram.png" alt="Instagram" />
                    </a>
                    <a href="mailto:worapratch06@gmail.com">
                        <img className="w-10 md:w-12 shadow-md transition-transform transform hover:scale-110" src="src/icons/gmail.png" alt="Gmail" />
                    </a>
                </div>

                {/* Portfolio Button */}
                <div className="mt-6">
                    <button className="bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition-all">
                        My Portfolio
                    </button>
                </div>
            </div>

            {/* Right Section - Profile Image */}
            <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                <img src="src/image/uniCho-removebg-preview.png" alt="Profile" className="w-60 md:w-80 lg:w-96 rounded-lg shadow-lg transition-transform transform hover:scale-105" />
            </div>
        </div>
    );
};

export default Home;


