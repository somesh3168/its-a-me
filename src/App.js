
import './App.css';
import Navbar from './navbar/navbar';
import Experience from './sections/experience';
import Projects from './sections/projects';
import TechnicalExposure from './sections/technicalExposure';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="resume">
        <div className="resume-header">
          <h1>Somesh Samadder</h1>
          <p><cite>Aspiring System Design Engineer with an out-of-the-box mindset, and a knack of automation.</cite></p>
        </div>
        <Experience />
        <TechnicalExposure />
      </div>
      <Projects />
    </div>
  );
}

export default App;
