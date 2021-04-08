import React from "react";

const DisplayCountries = ({ region }) => {
  region = region.sort((a, b) => 0.5 - Math.random());
  // region = region.slice(0, region.length - 230);
  return (
    <div>
      {
        region.map((country, key) => {
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
        })
      }
    </div>
  );
};

export default DisplayCountries;
