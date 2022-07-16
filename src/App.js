// /src/app.js
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1 className="main-title">Math Magicians</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <span className="btw-links">|</span>
            <Link to="/calc">Calculator</Link>
            <span className="btw-links">|</span>
            <Link to="/quote">Quote</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
