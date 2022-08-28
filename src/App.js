import './App.css';
import LandingPage from './components/pages/landing/Landing.jsx'
import About from './components/pages/about/About.jsx';
import Navbar from './components/layout/navbar/Navbar.jsx';
import Services from './components/pages/services/Services.jsx'
import Contact from './components/pages/contact/Contact.jsx'

function App() {
  return (
    <div className="Golemec">
      <Navbar/>
      <LandingPage />
      <About/>
      <Services/>
      <Contact/>
    </div>

  );
}

export default App;