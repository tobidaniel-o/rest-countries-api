const DisplayCountries = ({ data, regionName, countryName }) => {
  return data
    .filter((val) => {
      return (
        val.region.toLowerCase().includes(regionName.toLowerCase()) &&
        val.name.toLowerCase().includes(countryName.toLowerCase())
      );
    })
    .map((val, key) => {
      return (
        <div key={key}>
          <img src={val.flag} alt="flag" className="" img />
          <p>{val.name}</p>
          <p>{val.population}</p>
          <p>{val.region}</p>
          <p>{val.capital}</p>
          {/* <p>{val.languages[0].name}</p> */}
          <br />
        </div>
      );
    });
};

export default DisplayCountries;
