import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About/About';
import Main from './Main/Main'

function App() {
  return (
    <div className="App">

      <Router>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={ <Main /> }></Route>
          <Route path='/about' element={ <About /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
