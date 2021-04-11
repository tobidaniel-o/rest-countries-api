import React from "react";
import { useState, useEffect } from "react";
import DisplayCountries from "./DisplayCountries";
import Pagination from "./Pagination";

const UserSelect = () => {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  const fetchData = async () => {
    setLoading(true);
    const url = `https://restcountries.eu/rest/v2/all`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newData = data.sort((a, b) => 0.5 - Math.random());
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <form className="wrapper">
        <input
          className="input"
          type="text"
          placeholder="Search for a country..."
          value={countryName}
          onChange={(event) => {
            setCountryName(event.target.value);
            console.log(event.target.value);
          }}
        />
        <label htmlFor="getCountriesByRegion"></label>
        <select
          name="getCountriesByRegion"
          id="getCountriesByRegion"
          value={regionName}
          onChange={(event) => {
            setRegionName(event.target.value);
            console.log(event.target.value);
          }}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
      <DisplayCountries
        data={currentData}
        regionName={regionName}
        countryName={countryName}
        loading={loading}
      />
    </>
  );
};

export default UserSelect;
