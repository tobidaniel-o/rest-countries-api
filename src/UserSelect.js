import React from "react";
import { useState, useEffect } from "react";
import DisplayRandomCountries from "./DisplayRandomCountries";
import DisplayCountries from "./DisplayCountries";

const SearchCountries = () => {
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    const regionName = "Europe";
    const url = `https://restcountries.eu/rest/v2/region/${regionName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRegion(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
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
      {/* <div>
        <DisplayCountries />
      </div> */}
    </>
  );
};

export default SearchCountries;
