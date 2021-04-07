import React from "react";

const DisplayCountries = ({ displayData }) => {
  return (
    <div>
      {displayData.map((country, key) => {
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

export default DisplayCountries;
