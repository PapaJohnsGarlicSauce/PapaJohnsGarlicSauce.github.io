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
  const underConstructionMessage = <p>Coming Soon</p>;

  return (
    <div className="app">
      {isAppUnderConstruction && underConstructionMessage}
      {!isAppUnderConstruction && (
        <>
          <TopNav />
          <div className="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
