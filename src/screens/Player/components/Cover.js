import React from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Box, Col, YouTubeVideoPlayer, VideoPlayer} from 'components';

const Cover = ({item}) => {
  return (
    <Col centerAll>
      <Box
        wid="92%"
        ht={`${wp(80)}px`}
        hasShadow="0 8px 20px #adadcd90"
        hadRadius="20">
        {true ? (
          <VideoPlayer
            uri={
              '/Users/mymac/Library/Developer/CoreSimulator/Devices/09BB13B0-9667-4E24-8E6E-441E0BAE41CB/data/Containers/Data/Application/A8EB9687-5633-4F6D-AB40-20EE7B784947/Documents/RcQ4o1WI2ms.webm'
            }
            width="100%"
            height="100%"
            marginBottom={wp(2)}
            borderRadius={wp(5)}
          />
        ) : item?.id ? (
          <YouTubeVideoPlayer
            width="100%"
            height="100%"
            marginBottom={wp(2)}
            youtubeVideoId={item?.id}
            borderRadius={wp(5)}
          />
        ) : (
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1536811145290-bc394643e51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybCUyMGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: wp(5),
            }}
          />
        )}
      </Box>
    </Col>
  );
};

export default Cover;
