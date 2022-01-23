import {User} from 'models';

declare global {
  interface AuthState {
    user: User;
    loading?: boolean;
  }
  interface SearchState {
    searchResults: any;
    totalPages: any;
    currentPage: any;
    loading?: boolean;
  }
}
export {AuthState, SearchState};
