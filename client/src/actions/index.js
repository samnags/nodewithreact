import axios from 'axios';
import { FETCH_USER } from './types';

// With redux thunk, we now have access to dispatch, so we can call it when we want.
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res });
};

// Original
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };
