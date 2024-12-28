import React, { useEffect, useMemo, useState } from 'react';
import './posts.css';
import Header from './Header';
import Post from './Post';
import Pagination from './Pagination';
import ModalPost from './ModalPost';
import Lodash from '../../../lodashTasks/Lodash';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const POST_PER_PAGE = 10;
const MODAL_TYPES = {
    isEdit: false,
    isCreate: false,
};

const Posts = () => {
    const [modalActive, setModalActive] = useState(false);
    const [activeMenuPost, setActiveMenuPost] = useState(-1);
    const [modalType, setModalType] = useState(MODAL_TYPES);

    const [posts, setPosts] = useState([]);
    const [ownPosts, setOwnPosts] = useState(JSON.parse(localStorage.getItem('ownPosts')) || []);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchPost, setSearchPost] = useState('');

    const lastIndex = currentPage * POST_PER_PAGE;
    const firstIndex = lastIndex - POST_PER_PAGE;

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => post.title.toLowerCase().includes(searchPost.toLowerCase()) || post.body.toLowerCase().includes(searchPost.toLowerCase()));
    }, [posts, searchPost]);

    const pages = Array.from({ length: Math.ceil(filteredPosts.length / POST_PER_PAGE) }, (_, i) => i + 1);
    const paginatedPosts = filteredPosts.slice(firstIndex, lastIndex);

    useEffect(() => {
        const getPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((value) => value.json())
                .then((value) => {
                    setPosts([...ownPosts, ...value]);
                });
        };
        getPosts();
    }, []);

    useEffect(() => {
        localStorage.setItem('ownPosts', JSON.stringify(ownPosts));
    }, [ownPosts]);

    const handleClickMenu = (id) => {
        setActiveMenuPost(activeMenuPost === id ? -1 : id);
    };

    const handleClickDeletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
        setOwnPosts(ownPosts.filter((post) => post.id !== id));
    };

    const handleClickOpenModal = (type) => {
        setModalActive(true);
        setModalType({ ...modalType, [type]: true });
    };

    return (
        <div className="posts__container">
            <ModalPost
                modalActive={modalActive}
                setModalActive={setModalActive}
                setPosts={setPosts}
                setOwnPosts={setOwnPosts}
                modalType={modalType}
                setModalType={setModalType}
                activeMenuPost={activeMenuPost}
                setActiveMenuPost={setActiveMenuPost}
            />
            <Header modalActive={modalActive} setModalActive={setModalActive} handleClickOpenModal={handleClickOpenModal} setSearchPost={setSearchPost} />
            <ul className="posts__list">
                <TransitionGroup>
                    {paginatedPosts.map((post) => (
                        <CSSTransition key={post.id} timeout={500} classNames="post">
                            <Post
                                handleClickMenu={handleClickMenu}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                activeMenuPost={activeMenuPost}
                                handleClickDeletePost={handleClickDeletePost}
                                handleClickOpenModal={handleClickOpenModal}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Lodash />
        </div>
    );
};

export default Posts;
