import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <>
      <Navbar />
      <main className="font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
