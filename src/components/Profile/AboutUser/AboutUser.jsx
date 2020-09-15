import React from "react";
import style from "./AboutUser.module.css";



const AboutUser = ({user}) => {
    console.log(user)
    return (
        <div>
            <p className={style.paragraph}><b>Обо мне: </b>{user.aboutMe}</p> 
            <p className={style.paragraph}><b>В поиске работы: </b>{user.lookingForAJob ? '✅' : '❌'}</p> 
            <p className={style.paragraph}><b>Ключевые навыки: </b>{user.lookingForAJobDescription}</p>
            <b>Мои контакты: </b><ul>
                {Object.keys(user.contacts).map(key => {
                    return user.contacts[key] && <li key={key}>{user.contacts[key]}</li>
                })}
            </ul>
        </div>
    )
}

export default AboutUser;