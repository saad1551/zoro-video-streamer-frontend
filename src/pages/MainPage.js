import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { VideoListContainer } from '../components/SharedStyles';
import VideoList from '../components/VideoList';
import VideoUpload from '../components/VideoUpload';

const MainPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/storage/media/dashboard-videos`);
                setVideos(response.data);
            } catch (error) {
                toast.error('Error fetching videos. Displaying mock data.');
                console.error('Error fetching videos:', error);
                // Mock data as a backup
                const mockVideos = [
                    { id: 1, title: 'Video 1', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User A' },
                    { id: 2, title: 'Video 2', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User B' },
                    { id: 3, title: 'Video 3', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User C' },
                    { id: 4, title: 'Video 4', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User D' },
                    { id: 5, title: 'Video 5', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User E' },
                    { id: 6, title: 'Video 6', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User F' },
                    { id: 7, title: 'Video 7', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User G' },
                    { id: 8, title: 'Video 8', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User H' },
                    { id: 9, title: 'Video 9', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User I' },
                    { id: 10, title: 'Video 10', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnail: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', user: 'User J' },
                ];
                setVideos(mockVideos);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            <VideoListContainer>
                <VideoList videos={videos} />
            </VideoListContainer>
            <VideoUpload />
        </>
    );
};

export default MainPage;