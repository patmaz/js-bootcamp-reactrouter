import {combineReducers} from "redux";
import countries from './countries';
import searchText from './searchText';
import selectedContinent from './selectedContinent';

const reducers = combineReducers({
  countries,
  searchText,
  selectedContinent
});

export default reducers;