import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Sidebar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
