import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Sidebar />
        <Hero />

        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
