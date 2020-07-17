import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  const userElements = props.createUsersArr();
  const pagesList = props.createPagesList();
      return (
        <div>
          <nav
              className={style.nav}
              onClick={evt => props.togglePages(evt)}
          >
            {pagesList}
          </nav>
          {userElements}
        </div>
      );
}

export default Users;
