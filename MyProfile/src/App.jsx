import Home from "./pages/home";
import Navbar from "./assets/navbar";
import Gallery from "./pages/gallery";
import AboutMe from "./pages/aboutme";


function App() {
  return (
    <div className="font-serif bg-gradient-to-t from-blue-950 h-screen w-screen">
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />

    </div>
  );
}

export default App;
