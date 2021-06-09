import React, {useState} from 'react';
import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Works from './components/works/works';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import './app.scss';

function App() {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
      </div>
      <Footer />
    </div>
  );
}

export default App;
