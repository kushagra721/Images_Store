import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({SetImages}) => {

    const [search,setsSearch]=useState();


     function handleChange(e){
        setsSearch(e.target.value);
       // console.log(search)
       

    }

   const handleClick = async (e) =>{
    e.preventDefault();
    const res =  await axios.get("https://api.unsplash.com/search/photos",{
        params : {query:search},

        headers:{
            Authorization: "Client-ID YcNcZpxc5xreUWvNa59IhhCdiCfRaaVVctA53FPzhTM"
        }
    })

    SetImages(res.data.results)
   }








  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Images-Store</a>
          <form className="d-flex" role="search">
            <input
            onChange={handleChange}
              className="form-control me-2"
              type="search"
              placeholder="search to get Images"
             value={search}
              aria-label="Search"
            />
            <button onClick={handleClick} className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
