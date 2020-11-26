import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  };
};


const signUp = dispatch => {
  return async ({ email, password }) => {
    try {
      // make api request to sign up with that email and password
      // if we sign up, modify our state, and say that we are authenticated
      // if signing up fails, we probable need to reflect an error message somewhere
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp },
  { isSignedIn: false, errorMessage: '' }
);
