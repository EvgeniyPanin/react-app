import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./NewPostForm.module.css";

const NewPostForm = (props) => {
  return (
    <form className={style.form} onSubmit={props.handleSubmit}>
      <Field
        className={style.input}
        type="text"
        placeholder="Что у вас нового?"
        component="input"
        name="NewPostText"
      ></Field>
        <button type="submit" className={`btn btn-primary ${style.button}`}>Отправить</button>
    </form>
  );
};

export default reduxForm({ form: "NewPostForm" })(NewPostForm);
