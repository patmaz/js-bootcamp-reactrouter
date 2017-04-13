import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import CountryFlagContainer from './containers/CountriesListContainer';
import CountryDetailsContainer from './containers/CountryDetailContainer';
import ContinentsContainer from './containers/ContinentsContainer';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='contact' component={Contact} />
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentsContainer}/>
        <Route path='*' component={NotFound} />
    </Route>
);