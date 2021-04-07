import React from "react";
import { useState, useEffect } from "react";

const DisplayRandomCountries = () => {
  const [randomCountries, setRandomCountries] = useState([]);
  const url = `https://restcountries.eu/rest/v2/all`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data.sort((a, b) => 0.5 - Math.random());
      const newData = data.slice(0, data.length - 230)
      setRandomCountries(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {randomCountries.map((country, key) => {
        return (
          <div key={key}>
            <img src={country.flag} alt="flag" />
            <p>{country.name}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.capital}</p>
            <p>{country.languages[0].name}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRandomCountries;
