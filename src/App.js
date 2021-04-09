import React, { useState, useEffect } from "react";
import DisplayCountries from "./DisplayCountries";
import UserSelect from "./UserSelect";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchData = async () => {
    const url = `https://restcountries.eu/rest/v2/all`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.sort((a, b) => 0.5 - Math.random());
      setCountries(newData);
      setFilteredCountries(newData);
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getCountries = (chosenCounries) => {
    const copyOfAllCountries = [...countries];

    const filteredCountriesArray = copyOfAllCountries.filter((val) => {
      return (
        val.region.toLowerCase().includes(chosenCounries.toLowerCase()) ||
        val.name.toLowerCase().includes(chosenCounries.toLowerCase())
      );
    });

    setFilteredCountries(filteredCountriesArray);
  };
  return (
    <div>
      <UserSelect filterCountries={getCountries} />
      <DisplayCountries countries={countries} />
    </div>
  );
};

export default App;
