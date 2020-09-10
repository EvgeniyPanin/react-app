import React from "react";
import style from "./Paginator.module.css";

class Paginator extends React.Component {
  render() {
    return (
      <ul class={style.pagination}>
        <li>
          <span href="#">«</span>
        </li>
        {this.createPagesList().slice(0, 10)}
        <li>
          <span href="/">»</span>
        </li>
      </ul>
    );
  }

  createPagesList() {
    const { totalUsersCount, pageSize, currentPage } = this.props;

    const length = Math.ceil(totalUsersCount / pageSize);
    let pagesList = [];
    for (let i = 1; i <= length; i++) {
      pagesList.push(i);
    }
    return pagesList.map((item) => {
      return (
        <li>
          <span
            className={item === currentPage && style.active}
            onClick={this.props.togglePages}
          >
            {item}
          </span>
        </li>
      );
    });
  }
}

export default Paginator;
