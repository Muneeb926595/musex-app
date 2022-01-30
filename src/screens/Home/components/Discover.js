import {FlatList} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {getDiscoverSongs} from 'store/search/SearchActions';
import {Row, MyText, Icon, Col, Loader} from 'components';
import DiscoverCard from './DiscoverCard';

const Discover = () => {
  const dispatch = useDispatch();
  const {loading, discoverResults} = useSelector(({Musex}) => Musex.search);

  useEffect(() => {
    dispatch(getDiscoverSongs(40, ''));
  }, []);

  const renderListItem = useCallback(({item}) => {
    return <DiscoverCard item={item} />;
  }, []);
  const keyExtractor = useCallback((item, index) => item._id + index, []);

  return (
    <Col noFlex>
      <Row noFlex center between>
        <MyText weight="bold" size={`${RFValue(17)}px`}>
          Discover
        </MyText>
        <Row noFlex center>
          <MyText weight="300" color="#9d9d9d">
            All
          </MyText>
          <Icon marg={`0 0 0 ${wp(1)}px`} size={wp(2.4)} type="right-arrow" />
        </Row>
      </Row>
      <Row noFlex wid="100%" pad={`0 ${wp(2)}px`} marg={`${wp(8)}px 0`}>
        {loading ? (
          <Row centerAll marg={`${wp(8)}px 0 0 0`}>
            <Loader />
          </Row>
        ) : (
          <FlatList
            style={{
              width: '100%',
            }}
            horizontal
            data={discoverResults}
            snapToAlignment="center"
            decelerationRate="normal"
            keyExtractor={keyExtractor}
            renderItem={renderListItem}
            showsHorizontalScrollIndicator={false}
            listKey={(item2, index) => 'D' + index.toString()}
          />
        )}
      </Row>
    </Col>
  );
};

export default Discover;
