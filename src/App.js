import './App.css';
import {BrowserRouter, Routes, Route } from "react-router"
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
