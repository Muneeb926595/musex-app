import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Row, Box, Icon, Clickable} from 'components';

const PlayerOptions = ({isPlaying, setIsPlaying}) => {
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const handelPlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };
  return (
    <Row between center marg={`${wp(8)}px 0`}>
      <Clickable onClick={handleRepeat}>
        <Icon type={isRepeat ? 'repeat-active' : 'repeat'} size={wp(6)} />
      </Clickable>
      <Row noFlex center>
        <Icon type="header-search" size={wp(6)} />
        <Clickable onClick={handelPlay} marg={`0 ${wp(3)}px`}>
          <Box
            border="1px #bdbdbd"
            bg="#3F70ECfa"
            pad={`${wp(3)}px`}
            hasRadius="100">
            <Icon type={isPlaying ? 'pause' : 'play'} size={wp(6)} />
          </Box>
        </Clickable>
        <Icon type="header-search" size={wp(6)} />
      </Row>
      <Clickable onClick={handleShuffle}>
        <Icon type={isShuffle ? 'shuffle-active' : 'shuffle'} size={wp(6)} />
      </Clickable>
    </Row>
  );
};

export default PlayerOptions;
