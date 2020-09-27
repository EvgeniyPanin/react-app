import React from "react";
import style from "./AboutUser.module.css";

const AboutUser = ({ user }) => {
  const isHaveContacts = Object.keys(user.contacts).some((contact) => user.contacts[contact])
  console.log(isHaveContacts)
  return (
    <div>
      <p className={style.paragraph}>
        <b>Обо мне: </b>
        {user.aboutMe}
      </p>
      <p className={style.paragraph}>
        <b>В поиске работы: </b>
        {user.lookingForAJob ? "✅" : "❌"}
      </p>
      {user.lookingForAJob && <p className={style.paragraph}>
        <b>Ключевые навыки: </b>
        {user.lookingForAJobDescription}
      </p>}
      {isHaveContacts && <b>Мои контакты: </b>}
      {isHaveContacts && <ul className={style.contacts}>
        {Object.keys(user.contacts).map((key) => {
          const link = user.contacts[key];
          return (
            link && <li className={style.contacts__item} key={key}>
              <a className={`${style[key]} ${style.contacts__link}`} target="_blanck" href={link}></a>
            </li>
          );
        })}
      </ul>}
    </div>
  );
};

export default AboutUser;
