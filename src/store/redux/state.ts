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
  interface SongState {
    songs: any;
    recent: any;
    playlists: any;
    loading?: boolean;
  }
}
export {AuthState, SearchState, SongState};
