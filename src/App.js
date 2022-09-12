import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Book from './pages/book/Book';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Aftercare from './pages/aftercare/Aftercare';
import Dan from './pages/artist-dan/ArtistDan'

function App() {
  return (
    <div className="App">
      
          <div className="navbar-component">
            <Navbar />
          </div>

          <div className="body-componentn">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book-appointment' element={<Book />} />
              <Route path='/artists/Dan' element={<Dan />} />
              <Route path='/aftercare' element={<Aftercare />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>  
          </div>

        <div className="footer-component">
          <Footer />  
        </div>
    </div>
  );
}

export default App;
