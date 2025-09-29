import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
