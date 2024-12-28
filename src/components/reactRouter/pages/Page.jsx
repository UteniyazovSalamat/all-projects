import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Page = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <div className="page">
            <button onClick={goBack} className="goBack">
                Go back
            </button>
            {post && (
                <>
                    <h1 className="page__title">{post.title}</h1>
                    <p className="page__paragraph">{post.body}</p>
                    <Link to={`/posts/${id}/edit`} className="page__edit">
                        Edit this post
                    </Link>
                </>
            )}
        </div>
    );
};

export default Page;
