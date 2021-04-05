import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import DisplayCountries from "./DisplayCountries";

const region = "Europe";
const url = `https://restcountries.eu/rest/v2/region/${region}`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [randomCountries, setRandomCountries] = useState([]);



  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      // console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <DisplayCountries countries={countries} />
    </div>
  );
};

export default App;
