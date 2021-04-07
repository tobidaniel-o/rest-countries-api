import React from "react";
import { useState, useEffect } from "react";

const SearchCountries = () => {


  return (
    <form>
      <input type="text" placeholder="Search for a country..." />
      <label htmlFor="getCountriesByRegion"></label>
      <select name="getCountriesByRegion" id="getCountriesByRegion">
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
