import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      // make api request to sign up with that email and password
      // if we sign up, modify our state, and say that we are authenticated
      // if signing up fails, we probable need to reflect an error message somewhere
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signout = dispatch => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {signup, signin, signout},
  { isSignedIn: false }
);
