import React from "react";
import style from "./Paginator.module.css";

class Paginator extends React.Component {
  render() {
    return (
      <nav className={style.nav} onClick={(evt) => this.props.togglePages(evt)}>
        {this.createPagesList()}
      </nav>
    );
  }

  createPagesList() {
    const {totalUsersCount, pageSize, currentPage} = this.props;

    const length = Math.ceil(totalUsersCount / pageSize);
    let pagesList = [];
    for (let i = 1; i <= length; i++) {
      pagesList.push(i);
    }
    return pagesList.map((item) => {
      const itemClass =
        item === currentPage ? style.item_active : style.item;
      return <span className={itemClass}>{item}</span>;
    });
  }
}

export default Paginator;
