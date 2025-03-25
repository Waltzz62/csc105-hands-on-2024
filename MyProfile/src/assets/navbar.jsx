const Navbar = ({ setPage }) => {
    return (
        <nav className="flex justify-between p-6 bg-white shadow-md">
            <h1 className="text-2xl font-semibold text-black">Woraprat_Ch</h1>
            <div className="flex space-x-6">
                <button onClick={() => setPage("src/pages/home.jsx")} className="hover:text-red-500 transition-colors">
                    Home
                </button>
                <button onClick={() => setPage("src/pages/aboutme.jsx")} className="hover:text-red-500 transition-colors">
                    About Me
                </button>
                <button onClick={() => setPage("src/pages/gallery.jsx")} className="hover:text-red-500 transition-colors">
                    Gallery
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
// I've try to link by using usestate but it doesnt work now. So i will keep study more and more krub thx krub.