import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Resume />
        <Skills />
        <Footer />
      </main>
    </ThemeProvider>
  );
}