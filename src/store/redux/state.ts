import {User} from 'models';

declare global {
  interface AuthState {
    user: User;
    loading?: boolean;
  }
  interface SearchState {
    searchResults: any;
    discoverResults: any;
    loading?: boolean;
  }
}
export {AuthState, SearchState};
