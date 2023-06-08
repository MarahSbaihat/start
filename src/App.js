import './App.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './component/Navbar/Navbar.jsx';
import Header from './component/Header/Header.jsx';
import Portfolio from './component/Portfolio/Portfolio.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
