import React, { useState, useEffect } from 'react';
import './works.scss';
import API from '../../utils/API';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     id: "1",
  //     icon: "./assets/mobile.png",
  //     title: "Web Design",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  //     img:
  //       "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  //   },
  //   {
  //     id: "2",
  //     icon: "./assets/globe.png",
  //     title: "Mobile Application",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img:
  //       "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  //   },
  //   {
  //     id: "3",
  //     icon: "./assets/writing.png",
  //     title: "Branding",
  //     desc:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img:
  //       "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  //   },
  // ];

  useEffect (() => {
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
          
          <div className="container"
          key={d._id}
          >
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
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