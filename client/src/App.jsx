import React, {useState} from 'react';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Menu from './components/menu/menu';
import './app.scss';

function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>

    </div>
  );
}

export default App;
