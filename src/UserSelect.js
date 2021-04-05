import React from "react";
import { useState } from "react";

const SearchCountries = ({ filterCountries }) => {
  const [searchByRegion, setSearchByRegion] = useState();
  const [searchByCountry, setSearchByCountry] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchByRegion(inputValue);

    // filterCountries(inputValue);
  };

  const inputChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchByCountry(inputValue);
    // filterCountries(inputValue);
  };

  return (
    <form>
      <input type="text" placeholder="Search for a country..." onChange={inputChange}/>
      <label htmlFor="filterByRegion"></label>
      <select name="filterByRegion" id="filterByRegion" onChange={handleChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default SearchCountries;
