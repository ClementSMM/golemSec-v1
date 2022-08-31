import './App.css';
import LandingPage from './components/pages/landing/Landing.jsx';
import About from './components/pages/about/About.jsx';
import Navbar from './components/layout/navbar/Navbar.jsx';
import Services from './components/pages/services/Services.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import Footer from './components/layout/footer/Footer.jsx';

function App() {
  return (
    <div className="Golemec">
      <div style={{ position: "fixed", width: "100%" }}>
        <Navbar/>
      </div>
      <LandingPage />
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;