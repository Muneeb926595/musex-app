import {FlatList} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {getSongsFromStorage} from 'store/search/services';
import {Search, SearchListItem} from './components';
import {Box} from 'components';

const index = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  const [localSongs, setLocalSongs] = useState([]);

  useEffect(() => {
    const getSongsList = async () => {
      const tempList = await getSongsFromStorage();
      setSongs(tempList);
    };
    getSongsList();
  }, []);

  const renderListItem = useCallback(
    ({item}) => <SearchListItem item={item} navigation={navigation} />,
    [],
  );

  const handleSearch = (searchText) => {
    if (searchText !== '') {
      const results = songs.filter((song) =>
        song.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setLocalSongs(results);
    } else {
      setLocalSongs(songs);
    }
  };
  return (
    <Box pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
      <Search
        navigation={navigation}
        songs={songs}
        handleSearch={handleSearch}
      />
      <FlatList
        style={{
          marginTop: wp(12),
        }}
        data={localSongs}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        keyboardShouldPersistTaps="handled"
      />
    </Box>
  );
};

export default index;
