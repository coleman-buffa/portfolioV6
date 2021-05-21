import React from 'react';
import './skillList.scss';


export default function SkillList ({skill}) {
  return (
    <li className="skillList">
      {skill}
    </li>
  )
}