import { Divider } from "@mui/material";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Footer />
    </>
  );
}

export default App;
