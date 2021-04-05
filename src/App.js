import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import DisplayCountries from "./DisplayCountries";
import SearchCountries from "./UserSelect";

const region = "Europe";
// const url = `https://restcountries.eu/rest/v2/region/${region}`;
const url = `https://restcountries.eu/rest/v2/all`;

const App = () => {
  // 1. Initialize state
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      // console.log(data);
      setRegion(data);
      setFilteredCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const getRegionCountries = (chosenRegion) => {
    // the code that will filter out and make a new array of user's chosen region
    // make a copy of the region
    const copyOfRegion = [...region];

    //filter out only countries with the user's region selection
    const filteredCountriesByRegion = copyOfRegion.filter((regionData) => {
      return regionData.region === chosenRegion;
    });
    // Update filteredJobs array
    setFilteredCountries(filteredCountriesByRegion);
  };

  return (
    <div>
      <SearchCountries filterCountries={getRegionCountries} />
      <DisplayCountries countries={filteredCountries} />
    </div>
  );
};

export default App;
