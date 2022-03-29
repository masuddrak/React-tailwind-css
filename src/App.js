import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PriceTitle from './components/PriceTitle/PriceTitle';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <PriceTitle></PriceTitle>
    </div>
  );
}

export default App;
