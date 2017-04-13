import { connect } from 'react-redux';
import ContinentsList from '../components/ContinentsList';
import { setContinent, deleteCountry } from '../actions';
import countriesByContinent from '../selectors/countriesByContinent';

const mapStateToProps = state => ({
  countries: countriesByContinent(state)
});

const mapDispatchToProps = {
  setContinent,
  deleteCountry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContinentsList);