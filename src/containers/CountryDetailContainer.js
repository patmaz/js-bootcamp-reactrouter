import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/index';
import CountryDetails from '../components/CountryDetails';

class CountryDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id))
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry}/>
        );
    }
}

const mapStateToProps = state => ({
    selectedCountry: state.countriesReducer.selectedCountry
});

export default connect(mapStateToProps)(CountryDetailsContainer);