import React from "react";
import { reduxForm, Field } from "redux-form";
import style from './NewMessageForm.module.css';
import { required } from "../../../utils/validators/required";

const NewMessageForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field 
                name="newMessage" 
                component="input" 
                type='textarea' 
                validate={[required]}
            />
            <button type="submit">Отправить</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);