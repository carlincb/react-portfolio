import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      < Router >
      < Header />
      < Routes>
      < Route exact path='/' element={ <Home/> }/>
      < Route exact path='/Portfolio' element={ <Portfolio/> }/>
      </Routes>
      < Footer />
      </Router>
    </div>
  );
}

export default App;
