import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import DisplayRandomCountries from "./DisplayRandomCountries";
import UserSelect from "./UserSelect";

const App = () => {
  return (
    <div>
      <UserSelect />
      {/* <SearchCountries filterCountriesByRegion={filterCountriesByRegion} /> */}
      {/* <DisplayRandomCountries /> */}
    </div>
  );
};

export default App;
