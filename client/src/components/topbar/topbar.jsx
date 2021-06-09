import React from 'react';
import './topbar.scss';
import { Description, GitHub, LinkedIn, Drafts } from '@material-ui/icons';
import Resume from './colemanbuffa_resume.pdf';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>developer.</a>
          <div className="itemContainer">
            <a href={Resume}>
              <Description className='icon' />
              <span>Resume</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/coleman-buffa">
              <GitHub className='icon' />
              <span>GitHub</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/coleman-buffa/">
              <LinkedIn className='icon' />
              <span>LinkedIn</span>
            </a>
          </div>


        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}