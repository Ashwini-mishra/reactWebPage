import './App.css';
import Home from "./Container/Home/Home";
import Nav from './Components/Navbar/Index';
import Gallery from './Components/Navbar/Gallery';

function App() {
  return (
    <div className="App">
    <Nav />
     <Home />
     <Gallery />
    </div>
  );
}

export default App;
