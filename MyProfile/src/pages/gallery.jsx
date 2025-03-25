const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="src/image/cof (1).jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="src/image/hiphip (1).jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="src/image/it3k (1).jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="src/image/merlin (1).jpg" alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Gallery;
