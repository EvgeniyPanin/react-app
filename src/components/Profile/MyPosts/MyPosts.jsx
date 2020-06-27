import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";



const MyPosts = (props) => {
    const postsElements = props.posts
        .map(post => <Post contant={ post.contant }  avatar={ post.avatar }/>);
    return (
        <div>
            <NewPost
                    newPostText={ props.newPostText }
                    addPost={props.addPost}
                    changePostText={ props.changePostText }/>
            { postsElements }
        </div>
    )
}

export default MyPosts;