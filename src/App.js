import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
