import React from 'react';
import style from './UserProfile.module.css';



const UserProfile = (props) => {
    // debugger
    return (
      <div className={style.container}>
          <span className={style.avatar_container}>
              <img className={style.avatar} src={props.user.photos.large}/>
          </span>
          <p>ava+description</p>
      </div>
    );
}

export default UserProfile;