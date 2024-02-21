import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Views/Footer/Footer";
import Tutorials from "./Pages/Tutorials/Tutorials";
import Articles from "./Pages/Articles/Articles";
import Contact from "./Pages/Contact/Contact";
import GoTop from "./Components/GoTop/GoTop";
import DarkMode from "./Pages/Tutorials/DarkMode/DarkMode";
import OhMyPosh from "./Pages/Tutorials/OhMyPosh/OhMyPosh";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutorials/dark-mode-react" element={<DarkMode />} />
        <Route
          path="/tutorials/instalar-ohmyposh-windows"
          element={<OhMyPosh />}
        />
      </Routes>
      <GoTop />
      <Footer />
    </div>
  );
}

export default App;
