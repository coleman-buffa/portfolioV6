import React from 'react';
import './footer.scss';
import { Drafts } from '@material-ui/icons';

export default function Footer() {

  return (
    <footer id="footer">
      <a>
        <Drafts className='icon' />
        <span>coleman.buffa@gmail.com</span>
      </a>
    </footer >
  )
}