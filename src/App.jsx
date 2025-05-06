import { useEffect, useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import {Contact} from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        !isLoading ? "opacity-100" : "opacity-0"
      } bg-black text-gray-100`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
