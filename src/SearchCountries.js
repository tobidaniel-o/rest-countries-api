import React from 'react'

const SearchCountries = () => {
  return (
    <form>
      <input type="text"/>
      <select name="" id="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  )
}

export default SearchCountries
