import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';
import React, {useEffect, useCallback} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, MyText, Icon, Col, PostImage, Clickable} from 'components';
import {getSongs, updateRecentsSongs} from 'store/songs/SongsActions';

const RecentlyDownloaded = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, songs} = useSelector(({Musex}) => Musex.songs);

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  const renderListItem = useCallback(({item}) => {
    const handleClick = () => {
      dispatch(updateRecentsSongs(item));
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

  const handleClickOthers = () => {
    navigation.navigate('Library');
  };
  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Recently Added
        </MyText>
        <Row noFlex center>
          <Clickable onClick={handleClickOthers}>
            <MyText weight="300" color="#9d9d9d">
              Others
            </MyText>
          </Clickable>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Row noFlex center between marg={`${wp(8)}px 0`}>
        {songs?.length > 0 ? (
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
        ) : (
          <MyText weight="300" color="#9d9d9d">
            Nothing Found
          </MyText>
        )}
      </Row>
    </Col>
  );
};

export default RecentlyDownloaded;
