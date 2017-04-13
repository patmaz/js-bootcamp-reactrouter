import { createSelector } from 'reselect';

const countriesSelector = state => state.countries;
const searchTextSelector = state => state.searchText;

const searchedCountries = createSelector(
  countriesSelector,
  searchTextSelector,
  (countries, text) => countries.filter(country =>
    country.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
);

export default searchedCountries;