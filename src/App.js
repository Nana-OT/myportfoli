import './App.css';
import Skills from './components/Skills';
import Home from './components/Home';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Home/>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}></Route>         
          <Route path="/skills" exact Component={Skills}></Route>         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
