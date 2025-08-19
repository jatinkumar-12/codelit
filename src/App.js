import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Codlit from "./Pages/Codelit";
import Contact from "./Pages/Contact";

// Components

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/codelit" element={<Codlit />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
