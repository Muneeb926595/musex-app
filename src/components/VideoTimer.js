import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import {useInterval} from 'hooks';
import {millisToMinutesAndSeconds} from 'helpers/timeDateUtils';
import {MyText} from 'components';

const VideoTimer = ({reverseTimer, totalTimer}) => {
  const [seconds, setSeconds] = useState(reverseTimer ? totalTimer : 0);

  useInterval(() => {
    setSeconds(reverseTimer ? seconds > 1 && seconds - 1 : seconds + 1);
  }, 1000);

  return (
    <MyText size={`${RFValue(14)}px`} weight="300" color="#000000">
      {millisToMinutesAndSeconds(seconds * 1000)}
    </MyText>
  );
};

export default VideoTimer;
