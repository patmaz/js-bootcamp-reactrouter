import React from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { searchCountries, deleteCountry } from '../actions/actions-countries';
import '../country.css';

class CountryFlagContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(searchCountries(''));
    }

    search = (e) => {
        this.props.dispatch(searchCountries(e.target.value));
    };

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    };

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type='text' onChange={this.search} />
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    visibleCountries: state.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(CountryFlagContainer);