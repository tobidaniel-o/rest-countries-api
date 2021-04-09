import React from "react";
import { useEffect, useState } from "react";

const DisplayCountries = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.sort((a, b) => 0.5 - Math.random());
      setData(newData);
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
};

export default DisplayCountries;
