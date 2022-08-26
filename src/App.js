import './App.css';
import LandingPage from './components/pages/landing/Landing.jsx'
import About from './components/pages/about/About.jsx';
import Navbar from './components/pages/navbar/Navbar.jsx';
import Services from './components/pages/services/Services.jsx'
import Quote from './components/pages/quote/Quote.jsx'

function App() {
  return (
    <div className="Golemec">
      <Navbar/>
      <LandingPage />
      <About/>
      <Services/>
      <Quote/>
    </div>

  );
}

export default App;