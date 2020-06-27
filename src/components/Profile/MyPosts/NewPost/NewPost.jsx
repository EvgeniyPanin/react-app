import React from "react";
import style from "./NewPost.module.css";
import Button from "./Button/Button";


const NewPost = (props) => {

    const hundlerSubmit = (evt) => {
        evt.preventDefault();
        props.addPost();
    }

    const handlerChangeText = (evt) => {
        const text = evt.target.value;
        props.changePostText(text);
    }

    return (
        <div className={style.new_post}>
            <h2 className={style.header}>Мои посты</h2>
            <form className={style.form} name='new_post_form'>
                <textarea 
                        onChange={ handlerChangeText }
                        className={style.input} 
                        value={ props.newPostText } 
                        type='text' 
                        placeholder='Что у вас нового?'></textarea>
                <Button hundlerSubmit={ hundlerSubmit } 
                        contant='Опубликовать'/>
            </form>
        </div>
    )
        

}

export default NewPost;