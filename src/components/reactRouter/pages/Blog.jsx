import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogFilter from '../BlogFilter';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="blog">
            <h1 className="blog__title">Blogs</h1>

            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

            <div className="blog__link">
                <Link to="/posts/new">Add new post</Link>
            </div>

            {posts
                .filter((post) => post.title.includes(postQuery) && post.id >= startsFrom)
                .map((post) => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li className="post__title">{post.title}</li>
                    </Link>
                ))}
        </div>
    );
};

export default Blog;
