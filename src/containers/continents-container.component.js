import React from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';
import '../country.css';

class ContinentsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    chooseContinent = (e) => {
        this.props.dispatch(setContinent(e.target.value));
    };

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    };

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }

    render() {
        return (
            <div>
                <select onChange={this.chooseContinent}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    visibleCountries: state.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(ContinentsContainer);