import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Hero />

        <Contact />
      </main>
    </div>
  );
}

export default App;
