import React from "react";
import { reduxForm, Field } from "redux-form";
import style from './NewMessageForm.module.css';

const NewMessageForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field name="newMessage" component="input" type='textarea'></Field>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);