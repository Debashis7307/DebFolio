import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
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
import NotFound from "./components/NotFound";
import Loading from "./components/Loading"; // Import the Loading component
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 4-6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * 2000 + 4000); // Random time between 4-6 seconds

    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize EmailJS (if needed)
    // emailjs.init("pup9NgOtmDvO26nfM");

    // Cleanup timer on component unmount
    return () => clearTimeout(loadingTimer);
  }, []);

  const AppInner = ({ isLoadingProp }) => {
    const location = useLocation();
    const showLoading = location.pathname === "/";

    return (
      <>
        {/* Loading only on home route */}
        {showLoading && <Loading isLoading={isLoadingProp} />}

        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gradient-to-b from-dark to-darker text-white">
                <Header />
                <main>
                  <Home />
                  <About />
                  <Education />
                  <Skills />
                  <Projects />
                  <Milestones /> {/* Add the Milestones component here */}
                  <Contact />
                </main>
                <Footer />
                <AIAssistant />{" "}
                {/* AI Assistant floating in bottom right corner */}
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppInner isLoadingProp={isLoading} />
    </Router>
  );
};

export default App;
