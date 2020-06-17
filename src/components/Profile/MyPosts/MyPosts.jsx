import React from "react";
import style from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";




const MyPosts = (props) => {
    const postsElements = props.profilePage.posts
        .map(post => <Post contant={ post.contant }  avatar={ post.avatar }/>);

    return (
        <div>
            <NewPost addPost={ props.addPost } newPostText={ props.profilePage.newPostText } changeNewPostText={ props.changeNewPostText } />
            { postsElements }
        </div>
    )
}

export default MyPosts;