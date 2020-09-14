import React from "react";
import style from "./Profile.module.css";
import Illustration from "./Illustration/Illustration";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import UserProfile from "./UserProfile/UserProfile";


const Profile = ({user, status, setUserStatus, myID, loadAvatarHandle}) => {
  const isMe = user.userId === myID;
    return (
      <div className={style.profile}>
        {isMe && <Illustration />}
        <UserProfile
          user={user}
          status={status}
          setUserStatus={setUserStatus}
          myID={myID}
          loadAvatarHandle={loadAvatarHandle}
        />
        {isMe && <MyPostsContainer />}
      </div>
    );
}

export default React.memo(Profile);