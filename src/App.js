import './App.css';
import NavBar from "./NavBar.js"
import Banner from './Banner.jsx';
import Skills from './Skills.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;

