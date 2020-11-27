import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin', 'signup':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { token: null, errorMessage: ''};
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'crear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  };
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token){
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  }else{
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'crear_error_message'});
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probable need to reflect an error message somewhere
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
  }
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in'})
  }
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout'});
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, tryLocalSignIn, clearErrorMessage },
  { token: null, errorMessage: '' }
);
