import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Explore from "./routes/Explore";
import Gallery from "./routes/Gallery";
import About from "./routes/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
