// TODO: Set up absolute imports if I have time
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import TopNav from "./components/TopNav";

function App() {
  // TODO: Remove this flag when the app is ready
  const isAppUnderConstruction = true;
  const underConstructionMessage = <p>Under construction</p>;

  return (
    <div className="app">
      {isAppUnderConstruction && underConstructionMessage}
      {!isAppUnderConstruction && (
        <>
          <TopNav />
          <div className="main-section">
            <Routes>
              <Route path="/" element={!isAppUnderConstruction && <Home />} />
              <Route
                path="/about"
                element={!isAppUnderConstruction && <About />}
              />
              <Route
                path="/projects"
                element={!isAppUnderConstruction && <Projects />}
              />
              <Route
                path="/resume"
                element={!isAppUnderConstruction && <Resume />}
              />
              <Route
                path="/contact"
                element={!isAppUnderConstruction && <Contact />}
              />
            </Routes>
            {isAppUnderConstruction && underConstructionMessage}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
