import React, { useEffect, useRef, useState } from 'react';
import PostList from '../PostList';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../UI/myModal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../../../API/PostService';
import Loader from '../UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/select/MySelect';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({
        sort: '',
        query: '',
    });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage((prev) => prev + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="posts">
            <MyButton style={{ marginTop: '30px', marginBottom: '20px' }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />

            <MySelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue="Количество элементов на странице"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Показать все' },
                ]}
            />

            {postError && <h1>Произошла ошибка ${postError}</h1>}

            <PostList posts={sortedAndSearchedPosts} title="Посты про JS" removePost={removePost} />
            <div ref={lastElement} style={{ height: '20px' }}></div>

            {isPostsLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50xp' }}>
                    <Loader />
                </div>
            )}

            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
};

export default Posts;
