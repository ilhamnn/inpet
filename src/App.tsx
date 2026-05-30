import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl">Hello there</h1>
        <Button variant={"secondary"}>Tekan gw</Button>
      </div>
    </>
  );
}

export default App;
