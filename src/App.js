import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Portfolio from './Component/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Portfolio/>
    </div>
  );
}

export default App;
