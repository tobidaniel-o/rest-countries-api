import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import DisplayCountries from "./DisplayCountries";
import UserSelect from "./UserSelect";

const App = () => {
  // 1. Initialize state
  const [displayData, setDisplayData] = useState([]);
  const region = "Europe";
  
  // store the API in a variable
  const url = `https://restcountries.eu/rest/v2/region/${region}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDisplayData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const filterCountriesByRegion = (chosenRegion) => {
  //   // the code that will filter out and make a new array of user's chosen region
  //   // make a copy of the region
  //   const copyOfRegion = [...region];

  //   //filter out only countries with the user's region selection
  //   const allfilteredCountries = copyOfRegion.filter((regionData) => {
  //     return regionData.region === chosenRegion;
  //   });
  //   // Update filteredJobs array
  //   setFilteredCountries(allfilteredCountries);
  // };

  // const getCountryByName = (chosenCountryName) => {
  //   const getCountry = [...findCountryByName];

  //   const getCountryName = getCountry.filter((country) => {
  //     return country.name === chosenCountryName;
  //   });
  //   setFindCountryByName(getCountryName);
  // };

  return (
    <div>
      <UserSelect />
      {/* <SearchCountries filterCountriesByRegion={filterCountriesByRegion} /> */}
      <DisplayCountries displayData={displayData} />
    </div>
  );
};

export default App;
