import './App.css';
import NavBar from "./components/Navbar/Navbar"
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;

