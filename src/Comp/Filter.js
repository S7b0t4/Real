import React, {useEffect, useState} from 'react';
import seaside from "../src/seaside.svg";
import all from "../src/all.svg";
import mountains from "../src/Mountains.svg";
import Historical from "../src/Historical.svg";
import Residence from "../src/Residence.svg";
import For_life from "../src/For life.svg";
import Big_city_life from "../src/Big city life.svg";
import Prestige from "../src/Prestige.svg";
import Investment from "../src/Investment.svg";
import Commecial from "../src/Commecial.svg";
import Designer from "../src/Designer’s.svg";

const newArr = [
  {
    img:all,
    text:"All",
    link:"all",
  },
  {
    img:seaside,
    text:"Seaside",
    link:"idk",
  },
  {
    img:mountains,
    text:"Mountains",
    link:"sdf",
  },
  {
    img:Historical,
    text:"Historical",
    link:"bmgdrive",
  },
  {
    img:Residence,
    text:"Residence",
    link:"sdf",
  },
  {
    img:For_life,
    text:"For life",
    link:"For_life",
  },
  {
    img:Big_city_life,
    text:"Big city life",
    link:"Big_city_life",
  },
  {
    img:Prestige,
    text:"Prestige",
    link:"Prestige",
  },
  {
    img:Investment,
    text:"Investment",
    link:"Investment",
  },
  {
    img:Commecial,
    text:"Commecial",
    link:"Commecial",
  },
  {
    img:Designer,
    text:"Designer’s",
    link:"Designer",
  },
]
const Filter = (props) => {
  const [idky,setIdky] = useState(newArr)
  const makeSearch = (filter) => {
    let houses = newArr.filter(item =>{
      return item.link.includes(filter)
    })
    setIdky(houses)
  }
  return (
    <div className="filter_row">
      {
        idky.map((item)=>(
          <div className="icon" onClick={()=>{
            makeSearch(item.link)
          }}>
            <img src={item.img} alt=""/>
            <div className="icon_text">{item.text}</div>
          </div>
        ))
      }
    </div>)
};

export default Filter;