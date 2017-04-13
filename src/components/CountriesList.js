import React from 'react';
import CountryFlagList from '../components/FlagList';
import '../country.css';

const CountriesList = ({deleteCountry, searchCountries, countries}) => {
  return (
    <div>
      <div className="search text-center">
        <input type='text' onChange={e => searchCountries(e.target.value)} />
      </div>
      <CountryFlagList countries={countries} deleteCountry={deleteCountry}/>
    </div>
  )
};

export default CountriesList;