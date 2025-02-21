// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import Contact from './routes/contact/Contact';
import NotFound from './notFound';
import About from './routes/about/About';
import Apartment from './routes/apartment/Apartment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="apartment" element={<Apartment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
