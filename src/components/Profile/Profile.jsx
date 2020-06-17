import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
      <div className={style.profile}>
        <Illustration />
        <MyPosts profilePage={ props.profilePage } addPost={ props.addPost } changeNewPostText={ props.changeNewPostText }/>
      </div>
    );
}

export default Profile;