import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {RecentPlayed, Discover, RecentlyDownloaded} from './components';
import {MainHeader} from 'components';

const index = ({navigation}) => {
  const renderListItem = useCallback(
    ({item}) => (
      <>
        <RecentlyDownloaded navigation={navigation} />
        <RecentPlayed navigation={navigation} />
        <Discover navigation={navigation} />
      </>
    ),
    [],
  );
  return (
    <>
      <MainHeader navigation={navigation} title="Home" />
      <FlatList
        style={{
          paddingTop: wp(12),
          paddingRight: wp(5),
          paddingBottom: wp(25),
          paddingLeft: wp(5),
        }}
        data={[1]}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        keyboardShouldPersistTaps="handled"
      />
    </>
  );
};

export default index;
