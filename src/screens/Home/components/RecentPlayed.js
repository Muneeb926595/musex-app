import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col} from 'components';
import {getRecentsSongs} from 'store/songs/SongsActions';
import RecentCard from './RecentCard';

const RecentPlayed = ({navigation}) => {
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
    <Col>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Recent played
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            More
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      {recent?.length > 0 ? (
        <FlatList
          style={{
            paddingHorizontal: wp(2),
            marginVertical: wp(8),
          }}
          data={recent}
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
    </Col>
  );
};

export default RecentPlayed;
