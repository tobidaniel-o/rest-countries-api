import React from "react";
import { useState, useEffect } from "react";
import DisplayRandomCountries from "./DisplayRandomCountries";
import DisplayCountries from "./DisplayCountries";

const SearchCountries = () => {
  const [region, setRegion] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  const fetchData = async () => {
    // let regionName = "Europe";
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
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(event) => {
            console.log(event.target.value);
            setCountryName(event.target.value);
          }}
        />
        <label htmlFor="getCountriesByRegion"></label>
        <select
          name="getCountriesByRegion"
          id="getCountriesByRegion"
          onChange={(event) => {
            console.log(event.target.value);
            setRegionName(event.target.value);
          }}
          value={regionName}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      <div>
        <DisplayCountries region={region} />
      </div>
      <div>
        {/* {region
          .filter((val) => {
            if (countryName === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(countryName.toLowerCase())
            ) {
              return val.name;
            }
          })
          .map((val, key) => {
            return (
              <div key={key} className="user">
                {val.name}
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default SearchCountries;
