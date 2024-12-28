import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../../../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComment(params.id);
    }, []);

    return (
        <div style={{ width: '800px', marginTop: '20px' }}>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id}. {post.title}
                </div>
            )}
            <h2 style={{ marginTop: '15px' }}>Коментарии</h2>
            {isComLoading ? (
                <Loader />
            ) : (
                <div style={{ textAlign: 'justify' }}>
                    {comments.map((comm) => (
                        <div key={comm.id} style={{ marginTop: '15px' }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
