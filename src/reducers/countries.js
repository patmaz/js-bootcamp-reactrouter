import { DELETE_COUNTRY } from '../actions';
import countriesData from '../../data/countries';

const countries = (state = countriesData, action) => {
  switch (action.type) {
    case DELETE_COUNTRY:
      return state.filter(country => country.id !== action.id);
  }
  return state;
};

export default countries;