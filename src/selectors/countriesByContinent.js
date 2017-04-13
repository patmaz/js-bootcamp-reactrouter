import { createSelector } from 'reselect';

const countriesSelector = state => state.countries;
const selectedContinentSelector = state => state.selectedContinent;

const countriesByContinent = createSelector(
  countriesSelector,
  selectedContinentSelector,
  (countries, continent) => {
    if(continent === 'All') {
      return countries;
    }
    return countries.filter(country => country.continent === continent);
  }
);

export default countriesByContinent;