import {AuthActionTypes} from './../redux/actionTypes';
import {AuthState} from '../redux/state';

const INITIAL_STATE: AuthState = {
  user: {},
  loading: false,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: AuthState = INITIAL_STATE,
  action: Action,
): AuthState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
export default AuthReducer;