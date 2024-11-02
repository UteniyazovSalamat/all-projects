import React from 'react';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../../modal/Modal';

const MODAL_TYPES = {
    isEdit: false,
    isCreate: false,
};

const ModalPost = ({ modalActive, setModalActive, setPosts, setOwnPosts, modalType, setModalType, activeMenuPost, setActiveMenuPost }) => {
    const [postTitleText, setPostTitleText] = useState('');
    const [postBodyText, setPostBodyText] = useState('');

    const addPost = (e) => {
        e.preventDefault();

        if (postTitleText.trim().length === 0 || postBodyText.trim().length === 0) return;
        const newPost = {
            title: postTitleText,
            body: postBodyText,
            id: uuidv4(),
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newPost),
        })
            .then((res) => res.json())
            .then((value) => {
                setOwnPosts((prevOwnPosts) => [newPost, ...prevOwnPosts]);
                setPosts((prevPosts) => [newPost, ...prevPosts]);
                setPostTitleText('');
                setPostBodyText('');
                setModalActive(false);
                closeModal();
            });
    };

    const editPost = (e) => {
        e.preventDefault();
        if (postTitleText.trim().length === 0 || postBodyText.trim().length === 0) return;
        setPosts((prevPosts) =>
            prevPosts.map((post) => {
                if (activeMenuPost === post.id) {
                    return { ...post, title: postTitleText, body: postBodyText };
                } else {
                    return post;
                }
            })
        );
        closeModal();
    };

    const closeModal = () => {
        setModalType(MODAL_TYPES);
        setModalActive(false);
        setActiveMenuPost(-1);
    };

    return (
        <>
            <Modal modalActive={modalActive} closeModal={closeModal}>
                <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                    <div className="modal__content-header">
                        <button className="modal__delete" onClick={closeModal}>
                            <RxCross2 />
                        </button>
                        <h1 className="modal__title">{modalType.isCreate ? 'Create Post' : modalType.isEdit ? 'Edit Post' : 'closing...'}</h1>
                        <p className="modal__text">You can write anything you want and post it without any limit.</p>
                    </div>
                    <form className="modal__form" onSubmit={modalType.isCreate ? addPost : editPost}>
                        <div className="modal__form-content">
                            <h3 className="modal__form-title">Title</h3>
                            <input className="modal__input" type="text" placeholder="Post title" value={postTitleText} onChange={(e) => setPostTitleText(e.target.value)} />
                        </div>
                        <div className="modal__form-content">
                            <h3 className="modal__form-title">Body</h3>
                            <input className="modal__input" type="text" placeholder="Share your thoughts" value={postBodyText} onChange={(e) => setPostBodyText(e.target.value)} />
                        </div>
                        <div className="modal__buttons">
                            <button className="modal__btn-cancel" type="button" onClick={closeModal}>
                                Cancel
                            </button>
                            <button className="modal__btn-post">Post</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default ModalPost;
