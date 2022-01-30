import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Search, SearchListItem} from './components';
import {Box} from 'components';

const index = ({navigation}) => {
  const {loading, searchResults} = useSelector(({Musex}) => Musex.search);

  const renderListItem = useCallback(
    ({item}) => <SearchListItem item={item} navigation={navigation} />,
    [],
  );
  return (
    <Box pad={`${wp(12)}px ${wp(5)}px ${wp(12)}px ${wp(5)}px`}>
      <Search navigation={navigation} />
      <FlatList
        style={{
          marginTop: wp(12),
        }}
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        keyboardShouldPersistTaps="handled"
      />
    </Box>
  );
};

export default index;
