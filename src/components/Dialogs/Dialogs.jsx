import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
      <div className={style.container}>
          <section className={style.dialogs_container}>
            <div>Первый собеседник</div>
            <div>Второй собеседник</div>
            <div>Третий собеседник</div>
            <div>Четвертый собеседник</div>
            <div>Пятый собеседник</div>
            <div>Шестой собеседник</div>
            <div>Шестой собеседник</div>
            <div>Шестой собеседник</div>
            <div>Шестой собеседник</div>
            <div>Шестой собеседник</div>
            <div>Шестой собеседник</div>
          </section>
          <section>Здесь сообщения</section>
      </div>
    );
}

export default Dialogs;