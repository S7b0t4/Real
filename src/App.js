import './App.css';
import header_bg from "./src/header_bg.png"
import bit from "./src/Bit.png"
import eng from "./src/eng.png"
import filter from "./src/filter.svg"
import line from "./src/line.png"
import all from "./src/all.svg"
import seaside from "./src/seaside.svg"
import mountains from "./src/Mountains.svg"
import Historical from "./src/Historical.svg"
import Residence from "./src/Residence.svg"
import For_life from "./src/For life.svg"
import Big_city_life from "./src/Big city life.svg"
import Prestige from "./src/Prestige.svg"
import Investment from "./src/Investment.svg"
import Commecial from "./src/Commecial.svg"
import Designer from "./src/Designer’s.svg"
import img1 from "./src/img1.png"
import img2 from "./src/img2.png"
import img3 from "./src/img3.png"
import img4 from "./src/img4.png"
import img5 from "./src/img5.png"
import img6 from "./src/img6.png"
import img7 from "./src/img7.png"
import img8 from "./src/img8.png"
import img9 from "./src/img9.png"
import bit2 from "./src/bit2.svg"
import USDT from "./src/USDT.svg"
import IDK from "./src/IDK.svg"
import DH from "./src/DH.svg"
import phone from "./src/phone.svg"
import filttr from "./src/filttr.svg"
import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Filter from "./Comp/Filter"
import Filters from "./Comp/Filters"

const arr = [
  {
    title:"About",
    text:"The project allows you to purchase unique objects and items. You can pay for all properties using cryptocurrency payments. We make it simple quickly and secure for you",
    link:""
  },

  {
    title:"Premium",
    text:"After buying a property through our service you get private access to a privileged \n" +
      "club with the opportunity to purchase the rarely gems or art objects",
    link:""
  },
  {
    title:"Residence permit",
    text:"We help in getting the residence permit of any countries through the purchase of real estate on our service",
    link:""
  },
  {
    title:"Make an enquire",
    text:"You can make an request for any question or suggestion. Our experts will contact you asap",
    link:"get in touch"
  },

]

const idkArr = [
  {
    img:img1,
    title:"Modern Villa 55 with Pool",
    subtitle:"Al Marsa Street, 66, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: 2,5",
    tags:["all", "idk"]
  },
  {
    img:img2,
    title:"The residence resort",
    subtitle:"Thalang District, Thailand, Phuket",
    sale:"Sale: 105,56 ",
    rent:"Rent: n/a",
    tags:["all", "bmgdrive"]
  },
  {
    img:img3,
    title:"Villa Beyond-Namaste",
    subtitle:"Bang Thao, Thailand, Phuket",
    sale:"Sale: 105,56 ",
    rent:"Rent: 3,7",
    tags:["all", "idk"]
  },
  {
    img:img4,
    title:"The Waves Tower A",
    subtitle:"The Waves, Dubai Marina, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: 2,5",
    tags:["all", "residence"]
  },
  {
    img:img5,
    title:"Dubai Hills Estate",
    subtitle:"The Waves, Dubai Marina, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: n/a",
    tags:["all", "sdf"]
  },
  {
    img:img6,
    title:"Ava by Omniyat Penthouse",
    subtitle:"Ava by Omniyat, Palm Jumeirah, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: 3,7",
    tags:["all", "sdf"]
  },
  {
    img:img7,
    title:"Elite Royal Apartment",
    subtitle:"3 Villas, Jumeirah, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: 2,5",
    tags:["all", "residence"]
  },
  {
    img:img8,
    title:"Damac Hills Villa Cavalli",
    subtitle:"Lagoons, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: n/a",
    tags:["all", "residence"]
  },
  {
    img:img9,
    title:"Two Sophisticated Appartmemts",
    subtitle:"The Waves, Dubai Marina, Dubai",
    sale:"Sale: 105,56 ",
    rent:"Rent: 3,7",
    tags:["all", "idk"]
  },
]
function App() {
  const [idky, setIdky] = useState(idkArr)
  const [disable, setDisable] = useState(true)

  const handleFilter = (someFilter) => {
    console.log(someFilter)
    makeSearch(someFilter)
  }

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


  const makeSearch = (filter) => {
    let houses = idkArr.filter(item =>{
      return item.tags.includes(filter)
    })
    setIdky(houses)
  }
  const setDisab = () => {
    setDisable(!disable)
  }

  return (
    <div className="App">
      <div className="header">
        <img className="header_bg" src={header_bg} alt=""/>
        <div className="header_wrapper">
          <div className="container">
            <div className="header_top_row">
              <div className="header_top_row_row">
                <div className="header_top_row_cost_row">
                  <img src={bit} alt="" className="header_top_row_cost_row"/>
                  <div className="header_top_row_cost_num">~$21,822.74</div>
                </div>
                <div className="header_top_row_cost_row">
                  <img src={eng} alt="" className="header_top_row_cost_row"/>
                  <div className="header_top_row_cost_num">Eng</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_info_row">
            <div className="header_info_row_block">
              <div className="header_info_row_block_title">About</div>
              <div className="header_info_row_block_text">The project allows you to purchase unique objects and items. You can pay for all properties using cryptocurrency payments. We make it simple quickly and secure for you</div>
            </div>
            <div className="header_info_row_block">
              <div className="header_info_row_block_title">Premium</div>
              <div className="header_info_row_block_text">After buying a property through our service you get private access to a privileged
                club with the opportunity to purchase the rarely gems or art objects</div>
            </div>
            <div className="header_info_row_block">
              <div className="header_info_row_block_title">Residence permit</div>
              <div className="header_info_row_block_text">We help in getting the residence permit of any countries through the purchase of real estate on our service</div>
            </div>
            <div className="header_info_row_block">
              <div className="header_info_row_block_title">Make an enquire</div>
              <div className="header_info_row_block_colum">
                <div className="header_info_row_block_text">You can make an request for any question or suggestion. Our experts will contact you asap</div>
                <div className="header_info_row_block_subtext">get in touch</div>
              </div>
            </div>
          </div>
          <div className="header_info_row_mobil_idk">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              className="row"
            >
              {arr.map((slide ) =>(
                <SwiperSlide>
                  <div className="row_center">
                    <div className="row_row">
                      <div className="row_row_title">{slide.title}</div>
                      <div className="row_row_text">{slide.text}</div>
                      <div className="row_row_link">{slide.link}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {disable || <div className="filters_wrapper">
            <div className="container">
              <Filters onFilters={setDisab}/>
            </div>
          </div>}
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="body_row">
            <div className="body_row_row">
              <div className="icon" onClick={setDisab}>
                <img src={filter} alt=""/>
                <div className="icon_text">Filter</div>
              </div>
              <img src={line} alt=""/>
              <Filter onFilter={handleFilter} />

            </div>
            <div className="body_row_block">
              <div className="body_row_block_btn">All</div>
              <div className="body_row_block_btn">Sell</div>
              <div className="body_row_block_btn">Rent</div>
            </div>
          </div>
          <div className="body_row_adoptive">
            <div className="filter_btn_row">
              <div className="filter_btn" onClick={setDisab}>
                <img src={filttr} alt=""/>
                <div className="filter_btn_text">Filter</div>
              </div>
              <div className="body_row_block">
                <div className="body_row_block_btn">All</div>
                <div className="body_row_block_btn">Sell</div>
                <div className="body_row_block_btn">Rent</div>
              </div>
            </div>
            <div className="body_row_gow">
              <Swiper
                modules={[Pagination, FreeMode]}
                freeMode
                spaceBetween={0}
                slidesPerView={4}
                className="row"
              >
                {newArr.map((item) =>(
                  <SwiperSlide>
                    <div className="icon">
                      <img src={item.img} alt=""/>
                      <div className="icon_text">{item.text}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="body_block">
            {idky.map((item)=>(
              <div className="body_block_item">
                <img className="body_block_item_img" src={item.img} alt=""/>
                <div className="body_block_item_wrapper">
                  <a href={"/page1"} className="body_block_item_title">{item.title}</a>
                  <div className="body_block_item_subtitle">{item.subtitle}</div>
                  <div className="body_block_item_row">
                    <div className="body_block_item_row_block colum">
                      <div className="body_block_item_sale">{item.sale}</div>
                      <div className="body_block_item_rent">{item.rent}</div>
                    </div>
                    <div className="body_block_item_row_block body_block_item_row_block_row">
                      <img src={bit2} alt="" className="body_block_item_row_block_img"/>
                      <img src={USDT} alt="" className="body_block_item_row_block_img"/>
                      <img src={IDK} alt="" className="body_block_item_row_block_img"/>
                      <img src={DH} alt="" className="body_block_item_row_block_img"/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="phone_wrapper">
          <div className="phone">
            <img src={phone} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
