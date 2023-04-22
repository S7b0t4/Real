import React from 'react';
import "./Filters.css"
import exit from "../src/exit.svg"

const Filters = ({ onFilter }) => {
  return (
    <div className="filters_bg">
      <div className="filter_container">
        <div className="filter_top_row">
          <div className="filter_top_row_title">Filter</div>
          <div className="filter_top_row_exit">
            <img src={exit} alt=""/>
          </div>
        </div>
        <div className="filter_top_colum">
          <div className="filter_top_block">
            <div className="filter_top_block_title">Sort by</div>
            <select type="text" className="filter_top_block_list">
              <option value="filter_top_block_list_item" disabled>Choose selection</option>
              <option value="filter_top_block_list_item">Choose selection</option>
            </select>
          </div>
          <div className="filter_top_block">
            <div className="filter_top_block_title">Choose country</div>
            <select type="text" className="filter_top_block_list">
              <option value="filter_top_block_list_item" disabled>Choose selection</option>
              <option value="filter_top_block_list_item">Choose selection</option>
            </select>
          </div>
          <div className="filter_top_block">
            <div className="filter_top_block_title">Choose city</div>
            <select type="text" className="filter_top_block_list">
              <option value="filter_top_block_list_item" disabled>Choose selection</option>
              <option value="filter_top_block_list_item">Choose selection</option>
            </select>
          </div>
        </div>
        <div className="filter_top_colum_main">
          <div className="filter_top_block">
            <div className="filter_top_block_title">Select type of property</div>
            <select type="text" className="filter_top_block_list">
              <option value="filter_top_block_list_item" disabled>Multiple Choice</option>
              <option value="filter_top_block_list_item">Multiple Choice</option>
            </select>
          </div>
          <div className="filter_top_block_wrapper">
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Apartaments</div>
            </div>
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Islands</div>
            </div>
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Villas</div>
            </div>
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Houses</div>
            </div>
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Hotels</div>
            </div>
            <div className="filter_top_block_wrapper_item">
              <input className="filter_top_block_wrapper_item_checkbox" type="checkbox"/>
              <div className="filter_top_block_wrapper_item_title">Chalets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;