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
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import Popup from "./Components/Popup/Popup";
import VscodeEx from "./Pages/Articles/VscodeEx/VscodeEx";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Analytics />
      {showPopup && <Popup handleClose={handleClosePopup} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        {/* Tutorials Routes */}
        <Route path="/tutorials/dark-mode-react" element={<DarkMode />} />
        <Route
          path="/tutorials/instalar-ohmyposh-windows"
          element={<OhMyPosh />}
        />
        {/* Articles Routes */}
        <Route
          path="/articles/top-10-extensiones-visual-studio-code"
          element={<VscodeEx />}
        />
      </Routes>
      <GoTop />
      <Footer />
    </div>
  );
}

export default App;
