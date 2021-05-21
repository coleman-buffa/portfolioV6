import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/portfolioList';
import './portfolio.scss';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio, } from '../../data';
import API from '../../utils/API';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "misc",
      title: "Misc",
    },   
  ];

  useEffect(() => {
    loadProjectsByCategory(selected);
  }, [selected]);

  const loadProjectsByCategory = (category) => {
    API.getProjectsByCategory(category)
    .then(result => {
      setData(result.data);
      console.log(data);

    })
  }

  return (
    <div className="portfolio" id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.title}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (         
          <div className="item"
          key={d._id}
          >
            <img src={d.image_link} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}