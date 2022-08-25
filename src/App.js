import './App.css';
import LandingPage from './components/pages/landing/Landing.jsx'
import About from './components/pages/about/About.jsx';
import Navbar from './components/pages/navbar/Navbar.jsx';

function App() {
  return (
    <div className="Golemec">
      <Navbar/>
      <LandingPage />
      <About/>
    </div>

  );
}

export default App;