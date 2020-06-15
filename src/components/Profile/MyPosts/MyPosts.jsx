import React from "react";
import style from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";




const MyPosts = () => {
    return (
        <div>
            <NewPost />
            <Post contant='Hello? How are you?' />
            <Post contant="I use props! It's cool!" />
            <Post contant='Today is June 10th, perfect day to lern the React, Redux' />
        </div>
    )
}

export default MyPosts;