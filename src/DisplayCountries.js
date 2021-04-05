import React from "react";
import SearchCountries from "./SearchCountries";

const DisplayCountries = ({ countries }) => {
  return (
    <div>
      {countries.map((country, key) => {
        return (
          <div key={key}>
            <img src={country.flag} alt="flag"/>
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

export default DisplayCountries;
