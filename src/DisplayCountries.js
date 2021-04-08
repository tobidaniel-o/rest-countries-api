import React from "react";

const DisplayCountries = ({ region }) => {
  region = region.sort((a, b) => 0.5 - Math.random());
  return (
    <div>
      {/* {
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
      } */}

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
        })} */}
    </div>
  );
};

export default DisplayCountries;
