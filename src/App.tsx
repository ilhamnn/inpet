import "./App.css";
import Navbar from "./components/layouts/navbar/Navbar";
import NavbarMobile from "./components/layouts/navbar/NavbarM";

function App() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </>
  );
}

export default App;
