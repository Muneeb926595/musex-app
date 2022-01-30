import {FlatList} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {MainHeader, Box} from 'components';
import {LibraryListIem} from './components';
import {getSongsFromStorage} from 'store/search/services';

const index = ({navigation}) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongsList = async () => {
      const tempList = await getSongsFromStorage();
      setSongs(tempList);
    };
    getSongsList();
  }, []);

  const renderListItem = useCallback(
    ({item}) => <LibraryListIem item={item} navigation={navigation} />,
    [],
  );

  return (
    <>
      <MainHeader navigation={navigation} title="My Library" />
      <Box pad={`0 ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
        <FlatList
          style={{
            marginTop: wp(12),
          }}
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          keyboardShouldPersistTaps="handled"
        />
      </Box>
    </>
  );
};

export default index;
