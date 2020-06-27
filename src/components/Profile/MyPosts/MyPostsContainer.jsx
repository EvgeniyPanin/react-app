import React from "react";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";
import {handlerChangePostTextActionCreater, addPostActionCreater} from '../../../redux/profile-reducer';




const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const postsElements = state.profilePage.posts
        .map(post => <Post contant={ post.contant }  avatar={ post.avatar }/>);

    const addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    const changePostText = (text) => {
        props.store.dispatch(handlerChangePostTextActionCreater(text));
    }

    return <MyPosts 
                addPost={addPost}
                changePostText={ changePostText }
                posts={ postsElements }
                newPostText={ state.profilePage.newPostText }/>
                
}

export default MyPostsContainer;