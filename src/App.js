import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Playlist from './components/Playlist';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { useLocation } from "react-router-dom";
import Certifications from './components/Certifications';

function App() {

  const location = useLocation();

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/certifications' element={<Certifications />} />
      </Routes>
      {location.pathname !== '/resume' && <Footer />}
      {/* <Footer/> */}
    </>
  );
}

export default App;
