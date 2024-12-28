import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2024-12-10&sortBy=popularity&apiKey=f180944bdcd4473cab66354842d41564');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getPostsData();
    }, []);
    console.log(posts.articles);

    return <div></div>;
};

export default News;
