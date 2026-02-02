import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Contact from "./components/Contact";
import BookDemo from "./components/BookDemo";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdemo" element={<BookDemo />} />
      </Routes>
    </>
  );
}

export default App;
