import React from 'react'
import {Video,VideoWrapper} from './styled'
import VideoSrc from '../../Video/video.mp4'
function index({url}) {
    return (
        <VideoWrapper>
            <Video src={url} controls />
        </VideoWrapper>
    )
}

export default index
