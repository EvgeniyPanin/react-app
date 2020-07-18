import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";


const Profile = (props) => {
    return (
      <div className={style.profile}>
        <Illustration />
        <UserProfile user={props.user}/>
        <MyPostsContainer />
      </div>
    );
}

export default Profile;