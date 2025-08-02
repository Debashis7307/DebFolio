import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Milestones from "./components/Milestones"; // Import the Milestones component
import AIAssistant from "./components/ai_assistant"; // Import the AI Assistant component
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize EmailJS (if needed)
    // emailjs.init("pup9NgOtmDvO26nfM");
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-dark to-darker text-white">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Education />
                  <Skills />
                  <Projects />
                  <Milestones /> {/* Add the Milestones component here */}
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
        <AIAssistant /> {/* AI Assistant floating in bottom right corner */}
      </div>
    </Router>
  );
};

export default App;
