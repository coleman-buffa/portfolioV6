import React, {useState} from 'react';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import './app.scss';

function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>

    </div>
  );
}

export default App;
