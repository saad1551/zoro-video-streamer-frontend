import React from 'react';
import { Link } from 'react-router-dom';
import { VideoItem, VideoTitle, UserInfo, Thumbnail } from './SharedStyles';

const VideoList = ({ videos }) => {
    return (
        <>
            {videos.map((video) => (
                <VideoItem key={video.videoId}>
                    <Link to={`/${video.videoId}`}>
                        <Thumbnail src={video.thumbnailSignedUrl} alt={video.title} />
                        <VideoTitle>{video.title}</VideoTitle>
                    </Link>
                    <UserInfo>{video.uploadedBy}</UserInfo>
                </VideoItem>
            ))}
        </>
    );
};

export default VideoList;