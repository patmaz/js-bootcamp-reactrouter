import { SET_CONTINENT } from '../actions';

const initialState = 'All';

const selectedContinent = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTINENT:
      return action.name;
  }
  return state;
};

export default selectedContinent;