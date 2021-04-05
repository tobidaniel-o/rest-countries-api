import React from "react";
import { useState } from "react";

const SearchCountries = ({ filterCountriesByRegion, findCountryByName }) => {
  const [searchByRegion, setSearchByRegion] = useState();
  const [searchByCountryName, setSearchByCountryName] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchByRegion(inputValue);
    filterCountriesByRegion(inputValue);
  };

  const inputChange = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
    setSearchByCountryName(inputValue);
    findCountryByName(inputValue);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={inputChange}
        value={searchByCountryName}
      />
      <label htmlFor="filterByRegion"></label>
      <select
        name="filterByRegion"
        id="filterByRegion"
        onChange={handleChange}
        value={searchByRegion}
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
