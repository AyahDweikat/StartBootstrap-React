import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
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
