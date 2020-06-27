import React from "react";
import style from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";



const MyPosts = (props) => {

    return (
        <div>
            <NewPost
                    newPostText={ props.newPostText }
                    addPost={props.addPost}
                    changePostText={ props.changePostText }/>
            { props.posts }
        </div>
    )
}

export default MyPosts;