## Summary

This project integrates with the [REST Countries API](https://restcountries.eu) to pull country data and display it.

The React (https://reactjs.org) library was used on the front-end. SCSS/BEM/CSS was used for the styling of the page.

Firebase used for persistent data.


The project allows users to:

- See all countries from the API on the homepage
 - On page load, random countries from different regions will be displayed
  - call the API from inside the DisplayCountries and shuffle the countries. Limit results to 20 countries.
  
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

=> call the API using the useEffect()
=> hard code four countries from each of the region to be displayed on page load

=> on page load, it displays random countries
  => display at most 20 random countries from different region. 
  => random countries will be put in an array and math.random will be applied on them
=> create an input field that will accept input to search for a country after the region has been picked from the dropdown menu. This input field will maintain a state and have an onChange function
=> create a dropdown menu that will filter the countries by region. A state will maintain this as well.
=> when a region is picked, the list of the countries in that region is displayed. A state will be used to maintain also. Possibly a useState with an empty array
=> each country display will have detailed information about them. 
all
Search by all countries:
https://restcountries.eu/rest/v2/all

Search by country name. It can be the native name or partial name: 
https://restcountries.eu/rest/v2/name/{name}
e.g https://restcountries.eu/rest/v2/name/united

Search by region: Africa, Americas, Asia, Europe, Oceania:
https://restcountries.eu/rest/v2/region/{region}
e.g https://restcountries.eu/rest/v2/region/europe


COMPONENTS:
Main component - App.js
DisplayCountries component - Display.js
Search component - Search.js
Loading component - Loading.js


## Deploying your project

Project is deployed on Netlify on this URL address -

## STYLE GUIDE

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

## Typography

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px

### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

## Icons

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
