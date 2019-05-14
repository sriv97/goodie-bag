import axios from 'axios';

//intial state
const initialState = {
  candies: [],
};

//action types
const GOT_CANDIES = 'GOT_CANDIES';

//action creators
const gotCandies = data => ({
  type: GOT_CANDIES,
  candies: data,
});

//thunk action
export const fetchCandies = () => {
  return async dispatch => {
    const candies = await axios.get('/api/candies');
    dispatch(gotCandies(candies));
  };
};

//combined reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, candies: action.candies.data };
    default:
      return state;
  }
};

export default rootReducer;
