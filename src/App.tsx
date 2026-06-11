import "./App.css";
import Navbar from "./components/layouts/navbar/Navbar";
import NavbarMobile from "./components/layouts/navbar/NavbarM";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <NavbarMobile />
      </div>
      <Hero></Hero>
    </>
  );
}

export default App;
