import Hero from "./components/Hero";
import Character from "./components/Character";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Character />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
