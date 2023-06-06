
import './App.css';
import Navbar from './navbar/navbar';
import Experience from './sections/experience';
import Projects from './sections/projects';
import TechnicalExposure from './sections/technicalExposure';
import WorkingKnowledge from './sections/workingKnowledge';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="resume">
        <div className="resume-header">
          <h1>Somesh Samadder</h1>
          <p><cite>Aspiring AI Engineer with an out-of-the-box mindset, and a knack of automation.</cite></p>
        </div>
        <Experience />
        <TechnicalExposure />
        <WorkingKnowledge />
        <Projects />
      </div>
    </div>
  );
}

export default App;
