import React from "react";
import style from "./NewPost.module.css";
import Button from "./Button/Button";


const NewPost = (props) => {

    const newPostElement = React.createRef();

    const addPost = (evt) => {
        evt.preventDefault();
        const text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={style.new_post}>
            <h2 className={style.header}>Мои посты</h2>
            <form className={style.form} name='new_post_form'>
                <textarea ref={ newPostElement } className={style.input} type='text' placeholder='Что у вас нового?'></textarea>
                {/* <Button contant='Опубликовать'/> */}
                <button onClick={ addPost }>Опубликовать</button>
            </form>
        </div>
    )
        

}

export default NewPost;