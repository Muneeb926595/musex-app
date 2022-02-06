import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import RecentCard from '../Home/components/RecentCard';
import {getRecentsSongs} from 'store/songs/SongsActions';
import {MainHeader} from 'components';

const index = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, recent} = useSelector(({Musex}) => Musex.songs);

  useEffect(() => {
    dispatch(getRecentsSongs());
  }, []);
  const renderListItem = useCallback(
    ({item}) => <RecentCard item={item} navigation={navigation} />,
    [],
  );
  return (
    <>
      <MainHeader hideSearch title="Recents" />
      {recent?.length > 0 ? (
        <FlatList
          style={{
            height: '100%',
            paddingHorizontal: wp(2),
            marginVertical: wp(8),
          }}
          data={recent.slice(0, 5)}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <MyText
          pad={`0 ${wp(2)}px`}
          marg={`${wp(8)}px 0`}
          center
          color="#adadad">
          No recent played
        </MyText>
      )}
    </>
  );
};

export default index;
