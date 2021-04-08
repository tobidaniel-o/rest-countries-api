import React from "react";
import { useState, useEffect } from "react";
import DisplayRandomCountries from "./DisplayRandomCountries";
import DisplayCountries from "./DisplayCountries";

const UserSelect = () => {
  const [region, setRegion] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  const fetchData = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRegion(data);
      console.log(data);
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
          className="input"
          type="text"
          placeholder="Search for a country..."
          name={countryName}
          onChange={(event) => {
            setCountryName(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="getCountriesByRegion"></label>
        <select
          name="getCountriesByRegion"
          id="getCountriesByRegion"
          value={regionName}
          onChange={(event) => {
            setRegionName(event.target.value);
            console.log(event.target.value);
          }}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      {/* <DisplayCountries region={region} /> */}
      <div>
        {region
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
          })}
      </div>
    </>
  );
};

export default UserSelect;
