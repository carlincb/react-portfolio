import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Portfolio } from './pages';

function App() {
  return (
    <div className="App">
      < Router >
      < Route exact path='/' component={ Home }/>
      < Route exact path='/Portfolio' component={ Portfolio }/>
      </Router>
    </div>
  );
}

export default App;
