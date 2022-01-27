import { FlatList } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Search, SearchListItem } from './components';
import { Row, Box, Loader } from 'components';

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  // const [onEndReachedMomentum, setOnEndReachedMomentum] = useState(false);
  const { loading, searchResults, totalPages, currentPage } = useSelector(
    ({ Musex }) => Musex.search,
  );
  console.log("loading, searchResults, totalPages, currentPage", loading, searchResults, totalPages, currentPage)
  // const onEndReached = () => {
  //   if (!onEndReachedMomentum) {
  //     //load more date
  //     if (totalPages !== currentPage) {
  //       dispatch(
  //         getPosts(
  //           currentAllPostsPage,
  //           currentFollowingPostsPage,
  //           10,
  //           fetchOthersPosts,
  //           () => {},
  //         ),
  //       );
  //     }
  //     setOnEndReachedMomentum(true);
  //   }
  // };

  // const onMomentumScrollBegin = useCallback(() => {
  //   setOnEndReachedMomentum(false);
  // }, []);

  const renderListItem = useCallback(
    ({ item }) => <SearchListItem item={item?.snippet} />,
    [],
  );

  const loadingMoreDataIndicator = useCallback(
    () => (
      <Row noFlex centerAll wid="100%" marg={`${wp(8)}px 0 ${wp(34)}px 0`}>
        <Box wid={`${wp(5)}px`} ht={`${wp(5)}px`} centerAll>
          <Loader />
        </Box>
      </Row>
    ),
    [],
  );

  return (
    <Box pad={`${wp(12)}px ${wp(5)}px ${wp(25)}px ${wp(5)}px`}>
      <Search navigation={navigation} />
      <FlatList
        style={{
          marginTop: wp(12),
        }}
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        // onEndReachedThreshold={0.7}
        // onEndReached={onEndReached}
        keyboardShouldPersistTaps="handled"
      // onMomentumScrollBegin={onMomentumScrollBegin}
      // EmptyListComponent={loadingMoreDataIndicator}
      // ListFooterComponent={loadingMoreDataIndicator}
      />
    </Box>
  );
};

export default index;
