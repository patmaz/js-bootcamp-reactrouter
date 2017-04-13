import { SEARCH_COUNTRIES } from '../actions';

const initialState = '';

const searchText = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return action.searchText
  }
  return state;
};

export default searchText;