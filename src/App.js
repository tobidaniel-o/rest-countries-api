import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import UserSelect from "./UserSelect"
const App = () => {
  return (
    <div>
      <UserSelect />
      {/* <SearchCountries filterCountriesByRegion={filterCountriesByRegion} /> */}
      {/* <DisplayCountries /> */}
    </div>
  );
};

export default App;
