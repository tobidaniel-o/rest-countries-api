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
        <div key={key} className="displayContainer">
          <div className="imgContainer">
            <img src={val.flag} alt="flag" className="img" />
          </div>
          <div className="detailsContainer">
            <p className="countryName">{val.name}</p>
            <p>
              <span>Population: </span> {val.population}
            </p>
            <p>
              <span>Region: </span> {val.region}
            </p>
            <p>
              <span>Capital:</span> {val.capital}
            </p>
            {/* <p>{val.languages[0].name}</p> */}
            <br />
          </div>
        </div>
      );
    });
};

export default DisplayCountries;
