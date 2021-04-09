import React from "react";

const DisplayCountries = ({countries}) => {
  return (
    <div>
      {countries
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
