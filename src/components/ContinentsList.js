import React from 'react';
import CountryFlagList from './FlagList';
import '../country.css';

const ContinentsList = ({countries, setContinent, deleteCountry}) =>
  <div>
    <select onChange={e => setContinent(e.target.value)}>
      <option value="All">Cały świat</option>
      <option value="Europa">Europa</option>
      <option value="Afryka">Afryka</option>
    </select>
    <CountryFlagList countries={countries} deleteCountry={deleteCountry} />
  </div>;

export default ContinentsList;
