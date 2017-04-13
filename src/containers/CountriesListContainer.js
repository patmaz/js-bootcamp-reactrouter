import { connect } from 'react-redux';
import CountriesList from '../components/CountriesList';
import { searchCountries, deleteCountry } from '../actions/index';

import searchedCountries from '../selectors/searchedCountries';

const mapStateToProps = state => ({
  countries: searchedCountries(state),
});

const mapDispatchToProps = {
  searchCountries,
  deleteCountry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);