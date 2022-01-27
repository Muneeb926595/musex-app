import React, { useRef } from 'react'
import Video from 'react-native-video';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const VideoPlayer = ({ width, height, size, youtubeVideoId }) => {
  const videoRef = useRef()
  return (
    <Video
      source={{ uri: "https://player.vimeo.com/561134bb-3e59-41eb-be95-54cdeae52c38" }}
      onError={(err) => { console.log("err", err) }}
      controls={true}
      ref={videoRef}
      style={{
        width: width ? width : size || 25,
        height: height ? height : size || 25,
        marginTop: 1,
        alignSelf: 'center',
        borderColor: 'white',
      }}
    />
  )
}

export default VideoPlayer