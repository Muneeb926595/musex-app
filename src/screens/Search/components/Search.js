import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Icon, Clickable} from 'components';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const handleResetSearch = () => {
    setSearchText('');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Row noFlex center marg={`${wp(3)}px 0 0 0`}>
      <Clickable
        pad={`${wp(2)}px ${wp(2)}px ${wp(2)}px ${wp(1)}px `}
        onClick={goBack}>
        <Icon type="blue-back" size={wp(5)} />
      </Clickable>
      <Row
        bg="#ffffff"
        hasShadow="0 0 10px #cdcdcdf4"
        hasRadius="20"
        marg={`0 ${wp(2)}px 0 0`}
        pad={`${wp(3)}px ${wp(4)}px`}>
        <TextInput
          style={{flex: 1}}
          value={searchText}
          placeholder="Search"
          onChangeText={(value) => setSearchText(value)}
        />
        {(searchText !== '' || searchText?.length > 0) && (
          <Clickable pad={`0 0 0 ${wp(3)}px`} onClick={handleResetSearch}>
            <Icon type="rounded-cross" size={wp(5)} />
          </Clickable>
        )}
      </Row>
    </Row>
  );
};

export default Search;
