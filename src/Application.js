import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import {Navigations} from 'screens';

const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigations />;
};

export default Application;

// app Colors
// 3F70EC  -- >Blue
// #ffffff  --> white
// #000000  --> black
//#9d9d9d  --> grey
