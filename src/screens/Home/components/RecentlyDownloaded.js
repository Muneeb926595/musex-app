import React, {useState, useEffect, useCallback} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, PostImage, Clickable} from 'components';
import {getSongsFromStorage} from 'store/search/services';

const RecentlyDownloaded = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  console.log('songs', songs);
  useEffect(() => {
    const getSongsList = async () => {
      const tempList = await getSongsFromStorage();
      setSongs(tempList);
    };
    getSongsList();
  }, []);

  const renderListItem = useCallback(({item}) => {
    const handleClick = () => {
      navigation.navigate('Player', {item});
    };

    return (
      <Clickable onClick={handleClick}>
        <Col marg={`0 ${wp(3)}px 0 0 `} noFlex centerAll>
          <PostImage borderRadius={12} uri={item.thumb} size={wp(16)} />
          <MyText marg={`${wp(3)}px 0 0 0`} weight="400" color="#9d9d9d">
            {item?.title?.toString()?.substring(0, 10)}
          </MyText>
        </Col>
      </Clickable>
    );
  }, []);
  const keyExtractor = useCallback((item, index) => item._id + index, []);
  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Recently Added
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            Others
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Row noFlex center between marg={`${wp(8)}px 0`}>
        <FlatList
          style={{
            width: '100%',
          }}
          horizontal
          data={songs}
          snapToAlignment="center"
          decelerationRate="normal"
          keyExtractor={keyExtractor}
          renderItem={renderListItem}
          showsHorizontalScrollIndicator={false}
          listKey={(item2, index) => 'D' + index.toString()}
          windowSize={5} //Optimization
          initialNumToRender={3} //Optimization
          maxToRenderPerBatch={4} //Optimization
        />
      </Row>
    </Col>
  );
};

export default RecentlyDownloaded;
