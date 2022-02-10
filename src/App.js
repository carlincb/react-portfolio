import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      < Router basename={process.env.PUBLIC_URL}>
      < Header />
      < Routes>
      < Route exact path='/' element={ <Home/> }/>
      < Route exact path='/About' element={ <About/> }/>
      < Route exact path='/Portfolio' element={ <Portfolio/> }/>
      < Route exact path='/Contact' element={ <Contact/> }/>
      < Route exact path='/Resume' element={ <Resume/> }/>
      </Routes>
      < Footer />
      </Router>
    </div>
  );
}

export default App;
