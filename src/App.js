import './App.css';
import {BrowserRouter, Routes, Route } from "react-router"
import Centro from './Components/Centro.jsx';
import Navbar from './Components/Navbar.jsx';
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import AboutMe from './Components/AboutMe.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
