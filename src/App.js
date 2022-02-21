import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About/About';
import Main from './Main/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Main /> }></Route>
          <Route path='/about' element={ <About /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
