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
import idk_btn from "./src/idk_btn.svg"
import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css';

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
const newArr = [
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]="all"){
              return true
            }
          }
        })
      }
    } className="icon">
      <img src={all} alt=""/>
      <div className="icon_text">All</div>
    </div>,
    <div className="icon">
      <img src={seaside} alt=""/>
      <div className="icon_text">Seaside</div>
    </div>,
    <div className="icon">
      <img src={mountains} alt=""/>
      <div className="icon_text">Mountains</div>
    </div>,
    <div className="icon">
      <img src={Historical} alt=""/>
      <div className="icon_text">Historical</div>
    </div>,
    <div className="icon">
      <img src={Residence} alt=""/>
      <div className="icon_text">Residence</div>
    </div>,
    <div className="icon">
      <img src={For_life} alt=""/>
      <div className="icon_text">For life</div>
    </div>,
    <div className="icon">
      <img src={Big_city_life} alt=""/>
      <div className="icon_text">Big city life</div>
    </div>,
    <div className="icon">
      <img src={Prestige} alt=""/>
      <div className="icon_text">Prestige</div>
    </div>,
    <div className="icon">
      <img src={Investment} alt=""/>
      <div className="icon_text">Investment</div>
    </div>,
    <div className="icon">
      <img src={Commecial} alt=""/>
      <div className="icon_text">Commecial</div>
    </div>,
    <div className="icon">
      <img src={Designer} alt=""/>
      <div className="icon_text">Designer’s</div>
    </div>,
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
  const [index, setIndex] = useState(0)
  const [newIndex, setNewIndex] = useState(0)
  const [idky, setIdky] = useState(idkArr)

  const newArr = [
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]=="all"){
              return true
            }
            return false
          }
        })

        setIdky(idk)
      }
    } className="icon">
      <img src={all} alt=""/>
      <div className="icon_text">All</div>
    </div>,
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]=="idk"){
              return true
            }
          }
        })
        setIdky(idk)
      }
    }className="icon">
      <img src={seaside} alt=""/>
      <div className="icon_text">Seaside</div>
    </div>,
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]=="residence"){
              return true
            }
          }
        })
        setIdky(idk)
      }
    }className="icon">
      <img src={mountains} alt=""/>
      <div className="icon_text">Mountains</div>
    </div>,
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]=="bmgdrive"){
              return true
            }
          }
        })
        setIdky(idk)
      }
    } className="icon">
      <img src={Historical} alt=""/>
      <div className="icon_text">Historical</div>
    </div>,
    <div onClick={
      ()=> {
        const idk = idkArr.filter(item =>{
          for(let i = 0; i < item.tags.length; i++){
            if(item.tags[i]=="sdf"){
              return true
            }
          }
        })
        setIdky(idk)
      }
    } className="icon">
      <img src={Residence} alt=""/>
      <div className="icon_text">Residence</div>
    </div>,
    <div className="icon">
      <img src={For_life} alt=""/>
      <div className="icon_text">For life</div>
    </div>,
    <div className="icon">
      <img src={Big_city_life} alt=""/>
      <div className="icon_text">Big city life</div>
    </div>,
    <div className="icon">
      <img src={Prestige} alt=""/>
      <div className="icon_text">Prestige</div>
    </div>,
    <div className="icon">
      <img src={Investment} alt=""/>
      <div className="icon_text">Investment</div>
    </div>,
    <div className="icon">
      <img src={Commecial} alt=""/>
      <div className="icon_text">Commecial</div>
    </div>,
    <div className="icon">
      <img src={Designer} alt=""/>
      <div className="icon_text">Designer’s</div>
    </div>,
  ]

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
              {arr.map((slide) =>(
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
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="body_row">
            <div className="body_row_row">
              <div className="icon">
                <img src={filter} alt=""/>
                <div className="icon_text">Filter</div>
              </div>
              <img src={line} alt=""/>
              {newArr.map((item =>{
                return item
              }))}

            </div>
            <div className="body_row_block">
              <div className="body_row_block_btn">All</div>
              <div className="body_row_block_btn">Sell</div>
              <div className="body_row_block_btn">Rent</div>
            </div>
          </div>
          <div className="body_row_adoptive">
            <div className="filter_btn_row">
              <div className="filter_btn">
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
                {newArr.map((slide) =>(
                  <SwiperSlide>
                    <div className="row dkdslfk">
                      {slide}
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
                  <div className="body_block_item_title">{item.title}</div>
                  <div className="body_block_item_subtitle">{item.subtitle}</div>
                  <div className="body_block_item_sale">{item.sale}</div>
                  <div className="body_block_item_rent">{item.rent}</div>
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
