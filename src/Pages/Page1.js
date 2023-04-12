import React from 'react';
import bit from "../src/Bit.png";
import eng from "../src/eng.png";
import geoloc from "../src/geoloc.svg"
import "./Page1.css"
import bit2 from "../src/bit2.svg";
import USDT from "../src/USDT.svg";
import IDK from "../src/IDK.svg";
import DH from "../src/DH.svg";
import setings from "../src/setings.svg"
import main_bg2 from "../src/main_bg2.jpg"
import {Pagination, Navigation, FreeMode} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import mini_bg1 from "../src/mini_bg_1.jpg"
import mini_bg2 from "../src/mini_bg_2.jpg"
import mini_bg3 from "../src/mini_bg_3.jpg"
import mini_bg4 from "../src/mini_bg_4.jpg"
import mini_bg5 from "../src/mini_bg_5.jpg"
import mini_bg6 from "../src/mini_bg_6.jpg"
import mini_bg7 from "../src/mini_bg_7.jpg"
import main_body_block_mainblock from "../src/main_body_block_mainblock.jpg"
import img1 from "../src/img1.png";
import img2 from "../src/img2.png";
import img3 from "../src/img3.png";
import img4 from "../src/img4.png";
import img5 from "../src/img5.png";
import img6 from "../src/img6.png";
import img7 from "../src/img7.png";
import img8 from "../src/img8.png";
import img9 from "../src/img9.png";


const Page1 = () => {
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
  ]
  return (
    <div>
      <div className="header">
        <div className="header_container container">
          <div className="header_top_row_row">
            <div className="header_top_row_cost_row">
              <img src={bit} alt="" className="header_top_row_cost_row"/>
              <div className="header_top_row_cost_num">~$21,822.74</div>
            </div>
            <div className="header_top_row_row_row">
              <div className="header_top_row_text">
                <div className="header_top_row_text_text yellow">showmehome.io</div>
                <div className="header_top_row_text_text pink">showmehome.io</div>
                <div className="header_top_row_text_text green">showmehome.io</div>
                <div className="header_top_row_text_text orange">showmehome.io</div>
              </div>
              <div className="header_top_row_cost_row">
                <img src={eng} alt="" className="header_top_row_cost_row"/>
                <div className="header_top_row_cost_num">Eng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_body">
        <div className="container">
          <div className="header_body_wrapper">
            <div className="header_body_wrapper_link_row">
              <a href="/" className="header_body_wrapper_link">Main page</a>
              <p>/</p>
              <a href="/page1" className="header_body_wrapper_link now">Modern Villa 55 with Pool</a>
            </div>
            <div className="header_body_wrapper_row_block">
              <div className="header_body_wrapper_row_block_colum">
                <div className="header_body_wrapper_row_block_title">Modern Villa 55 with Pool</div>
                <div className="header_body_wrapper_row_block_subtitle"><img src={geoloc} alt=""/><div>Palm Jumeirah Dubai, Dubai, United Arab Emirates</div></div>
              </div>
              <div className="header_body_wrapper_row_block_colum_2">
                <div className="info">Sale: 105,56 </div>
                <div className="info">Rent: 2,5 </div>
              </div>
              <div className="header_body_wrapper_row_block_row">
                <img src={bit2} alt="" className="body_block_item_row_block_img"/>
                <img src={USDT} alt="" className="body_block_item_row_block_img"/>
                <img src={IDK} alt="" className="body_block_item_row_block_img"/>
                <img src={DH} alt="" className="body_block_item_row_block_img"/>
              </div>
              <div className="header_body_wrapper_row_block_row_2">
                <div className="header_body_wrapper_row_block_row_2_share">
                  <img src={setings} alt=""/>
                  <a className="header_body_wrapper_row_block_row_2_share_link">Share</a>
                </div>
                <div className="header_body_wrapper_row_block_row_2_btn">
                  Request Info
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="main">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          className="row"
        >
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row_row_title"><img className="main_bg" src={main_bg2} alt=""/></div>
            </SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Pagination, Navigation, FreeMode]}
          freeMode
          navigation
          spaceBetween={0}
          slidesPerView={10}
          className="row"
        >
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg1} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg2} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg3} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg4} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg5} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg6} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg7} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg1} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg2} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg3} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg4} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg5} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg6} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg7} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg1} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg2} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg3} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg4} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg5} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg6} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mini_bg" src={mini_bg7} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="main_body">
        <div className="container">
          <div className="main_body_row_wrapper">
            <div className="main_body_row">
              <div className="main_body_row_title">About</div>
              <div className="main_body_row_title">investment value</div>
              <div className="main_body_row_title">uniqueness</div>
            </div>
          </div>
          <div className="main_body_block">
            <div className="main_body_block_info">
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">2022</div>
                <div className="main_body_block_info_colum_item">construction year</div>
              </div>
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">3</div>
                <div className="main_body_block_info_colum_item">floors</div>
              </div>
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">800</div>
                <div className="main_body_block_info_colum_item">Total building area</div>
              </div>
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">136</div>
                <div className="main_body_block_info_colum_item">Total living area</div>
              </div>
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">5</div>
                <div className="main_body_block_info_colum_item">bedrooms</div>
              </div>
              <div className="main_body_block_info_colum">
                <div className="main_body_block_info_colum_item main_body_block_info_colum_item_main">245</div>
                <div className="main_body_block_info_colum_item">parking spaces</div>
              </div>
            </div>
            <div className="main_body_block_mainblock">
              <div className="main_body_block_mainblock_colum">
                <div className="main_body_block_mainblock_colum_wrapper">
                  <div className="main_body_block_mainblock_colum_row">
                    The 77-storey tower rises in the heart of The Opera District, only steps away from the iconic Dubai Opera. Residents can experience life in spacious, masterfully crafted apartments with an unparalleled breadth of amenities surrounded by spellbinding views and year round entertainment.
                  </div>
                  <div className="main_body_block_mainblock_colum_row">
                    All residents of these towers will have access to a dedicated concierge desk in the lobby. A separate entrance for the staff will assure the smoothest traffic flow.
                  </div>
                  <div className="main_body_block_mainblock_colum_row">
                    The generous living room at this tower is a gorgeous place for entertaining, dining or simply soaking in the views over Dubai’s ever astounding Burj Khalifa. Full-height window walls cast views across Downtown Dubai and the city beyond.
                  </div>
                </div>
                <a className="main_body_block_mainblock_colum_link">
                  Download presentation (PDF)
                </a>
              </div>
              <img src={main_body_block_mainblock} alt="" className="main_body_block_mainblock_img"/>
            </div>
          </div>
          <div className="main_body_alsoBeInterested">
            <div className="main_body_alsoBeInterested_title">Also be interested</div>
            <div className="main_body_alsoBeInterested_row">
              {idkArr.map((item) => (
                <div className="body_block_item_new">
                  <img className="body_block_item_new_img" src={item.img} alt=""/>
                  <div className="body_block_item_new_wrapper">
                    <a href={"/page1"} className="body_block_item_new_title">{item.title}</a>
                    <div className="body_block_item_new_subtitle">{item.subtitle}</div>
                    <div className="body_block_item_new_row">
                      <div className="body_block_item_new_row_block">
                        <div className="body_block_item_new_sale">{item.sale}</div>
                        <div className="body_block_item_new_rent">{item.rent}</div>
                      </div>
                      <div className="body_block_item_row_block">
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
        </div>
      </div>
    </div>
  );
};

export default Page1;