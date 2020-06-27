// import React from "react";
import MyPosts from "./MyPosts";
import {handlerChangePostTextActionCreater, addPostActionCreater} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreater();
            dispatch(action);
        },
        changePostText: (text) => {
            const action = handlerChangePostTextActionCreater(text)
            dispatch(action);
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;