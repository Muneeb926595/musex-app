import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, Avatar, Box} from 'components';
import RecentCard from './RecentCard';

const RecentPlayed = ({navigation}) => {
  const recentData = [1, 2, 3, 4, 5];
  const renderListItem = useCallback(
    ({item}) => <RecentCard navigation={navigation} />,
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
      <FlatList
        style={{
          paddingHorizontal: wp(2),
          marginVertical: wp(8),
        }}
        data={recentData}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        keyboardShouldPersistTaps="handled"
      />
    </Col>
  );
};

export default RecentPlayed;
