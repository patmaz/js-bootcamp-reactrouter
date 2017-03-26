import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/actions-countries';
import countriesData from '../../data/countries';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: countriesData};
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return {...state, selectedCountry: selectedCountry};
        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country =>
                country.name.toLocaleLowerCase().includes(action.searchText.toLocaleLowerCase()));
            return {...state, visibleCountries: foundCountries};
        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id != action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
            return {...state, countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries};
        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return {...state, visibleCountries: continentCountries};
    }
    return state;
};

export default countriesReducer;