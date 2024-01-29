// TODO: Set up absolute imports if I have time
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Attrs from "./components/Attrs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import TopNav from "./components/TopNav";

function App() {
  // TODO: Remove this flag when the app is ready
  const isAppUnderConstruction = false;
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
              <Route path="/attrs" element={<Attrs />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
