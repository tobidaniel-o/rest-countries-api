import React from "react";
import { useState, useEffect } from "react";

const UserSelect = () => {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  const fetchData = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.sort((a, b) => 0.5 - Math.random());
      setData(newData);
    } catch (error) {}
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
          value={countryName}
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
      <div>
        {data
          .filter((val) => {
            return (
              val.region.toLowerCase().includes(regionName.toLowerCase()) &&
              val.name.toLowerCase().includes(countryName.toLowerCase())
            );
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <img src={val.flag} alt="flag" />
                <p>{val.name}</p>
                <p>{val.population}</p>
                <p>{val.region}</p>
                <p>{val.capital}</p>
                <p>{val.languages[0].name}</p>
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserSelect;
