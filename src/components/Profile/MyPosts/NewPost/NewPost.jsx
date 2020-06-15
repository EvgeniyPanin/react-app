import React from "react";
import style from "./NewPost.module.css";
import Button from "./Button/Button";




const NewPost = () => {
    return (
        <div className={style.new_post}>
            <h2 className={style.header}>Мои посты</h2>
            <form className={style.form} name='new_post_form'>
                <textarea className={style.input} type='text' placeholder='Что у вас нового?'></textarea>
                <Button contant='Опубликовать'/>
            </form>
        </div>
    )
        

}

export default NewPost;