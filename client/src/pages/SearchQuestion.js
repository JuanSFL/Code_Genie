import React from 'react';
import SearchBar from '../components/SearchBar';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../Main.css"
import data from "../Data.json"


function SearchQuestion() {
    return (
      <div className="search-cont">
        <h1>Search</h1>
        <SearchBar data={data} placeholder="Search questions..." ></SearchBar>
      </div>
    );
  }
export default SearchQuestion;

{/* <input className="searchbar" placeholder="Search for a solution" type="text" title="Search"></input> */}