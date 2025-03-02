import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
