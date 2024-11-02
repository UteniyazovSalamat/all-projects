import React from 'react';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Post = ({ handleClickMenu, id, title, body, activeMenuPost, handleClickDeletePost, handleClickOpenModal }) => {
    return (
        <li className="posts__item">
            <div className="post__item-content">
                <h3 className="post__title">{title}</h3>

                <button className="post__btn-menu" onClick={() => handleClickMenu(id)}>
                    <PiDotsThreeOutlineVerticalFill />
                </button>

                {activeMenuPost === id && (
                    <div className="post__edit-delete">
                        <button className="post__edit" onClick={() => handleClickOpenModal('isEdit')}>
                            <MdOutlineEdit />
                            Edit
                        </button>
                        <button className="post__delete" onClick={() => handleClickDeletePost(id)}>
                            <RiDeleteBin5Line />
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <p className="post__body">{body}</p>
        </li>
    );
};

export default Post;
