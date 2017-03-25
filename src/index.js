import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { getCountries } from './actions/actions-countries.js';
import DevTools from './devtools/DevTools';

render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());