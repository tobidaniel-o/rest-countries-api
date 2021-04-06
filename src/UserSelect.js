import React from "react";
import { useState } from "react";

const SearchCountries = ({ filterCountriesByRegion }) => {
  const [searchByRegion, setSearchByRegion] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchByRegion(inputValue);
    filterCountriesByRegion(inputValue);
  };

  return (
    <form>
      <input type="text" placeholder="Search for a country..." />
      <label htmlFor="filterByRegion"></label>
      <select
        name="filterByRegion"
        id="filterByRegion"
        value={searchByRegion}
        onChange={handleChange}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default SearchCountries;
