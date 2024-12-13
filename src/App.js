import './App.css';
import NavBar from "./NavBar.js"
import Banner from './Banner.jsx';
import Projects from './Projects.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;

