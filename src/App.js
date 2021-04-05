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

  // const getJobs = (chosenJob) => {
  //   // the code that will filter out and make a new array of user's chosen department
  //   // make a copy of all the jobs
  //   const copyOfAllJobs = [...jobs];
  //   // filter out only jobs with user's selection
  //   const filteredJobsArray = copyOfAllJobs.filter((job) => {
  //     return job.categories.department === chosenJob;
  //   });

  //   // Update filteredJobs array
  //   setFilteredJobs(filteredJobsArray);
  // };

  const getRegionCountries = (chosenRegion) => {
    // the code that will filter out and make a new array of user's chosen region
    // make a copy of the region
    const copyOfRegion = [...region];

    //filter out only countries with the user's region selection
    const filteredCountriesByRegion = copyOfRegion.filter((region) => {
      
    })
  };

  return (
    <div>
      <SearchCountries />
      {/* <DisplayCountries countries={countries} /> */}
    </div>
  );
};

export default App;
