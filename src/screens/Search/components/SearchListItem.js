import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Clickable, MyText, PostImage, Icon} from 'components';
import {downloadMusic} from 'helpers';

const DOWNLOADING_STATES = {
  INTITAL: 'initial',
  DOWNLOAING: 'downloading',
  DOWNLOADED: 'downloaded',
};

const SearchListItem = ({item, navigation}) => {
  const [downloading, setDownloading] = useState(DOWNLOADING_STATES.INTITAL);
  console.log('item', item);
  const handleClick = () => {
    navigation.navigate('Player', {youtubeVideoId: item?.id});
  };

  const handelDownload = () => {
    setDownloading(DOWNLOADING_STATES.DOWNLOAING);
    const successCallback = () => {
      setDownloading(DOWNLOADING_STATES.DOWNLOADED);
    };
    const errorCallback = () => {
      setDownloading(DOWNLOADING_STATES.INTITAL);
      alert('something went wrong');
    };

    downloadMusic('', successCallback, errorCallback);
  };

  return (
    <Clickable onClick={handleClick}>
      <Row
        noFlex
        wid="100%"
        marg={`${wp(2)}px 0`}
        hasShadow="0 0 30px #cdcdcd45"
        hasRadius="10"
        center
        bg="#ffffff"
        between
        pad={`${wp(6)}px ${wp(2)}px`}>
        <Row center marg={`0 ${wp(2)}px 0 0`}>
          <PostImage
            width={wp(16)}
            height={wp(16)}
            uri={item?.thumb}
            borderRadius={20}
          />
          <MyText
            marg={`0 0 0 ${wp(3)}px`}
            style={{width: '75%'}}
            size={`${RFValue(12)}px`}>
            {item?.title}
          </MyText>
        </Row>
        {downloading === DOWNLOADING_STATES.INTITAL ? (
          <Clickable onClick={handelDownload}>
            <Icon type="download" size={wp(5)} />
          </Clickable>
        ) : (
          <MyText>Donwloading</MyText>
        )}
      </Row>
    </Clickable>
  );
};

export default SearchListItem;
