import React, { useState, useEffect } from 'react';
import './works.scss';
import API from '../../utils/API';
import { GitHub, WebAsset } from '@material-ui/icons';
import SkillList from '../skillList/skillList';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    API.getProjects()
      .then(result => {
        setData(result.data);
      })
  }

  const handleClick = (direction) => {
    if (direction === "left") {
      if (currentSlide === 0) {
        setCurrentSlide(data.length - 1)
      }
      else {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      if (currentSlide === data.length - 1) {
        setCurrentSlide(0);
      }
      else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (

          <div className="container" key={d._id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="iconContainer">
                    <div>
                      <a href={d.repo_link}>
                        <GitHub className="icon" />
                      </a>
                    </div>
                    <div>
                      <a href={d.deployed_link}>
                        <WebAsset className="icon" />
                      </a>
                    </div>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <div className="skillContainer">
                    <ul>
                      {d.skills.map((skill) => (
                        <SkillList
                        key={skill}
                        skill={skill}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.image_link} alt="" />
              </div>

            </div>
          </div>
        ))}
      </div>
      <img src="./assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="./assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  );
}