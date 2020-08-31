import React from 'react';
import style from './Field.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error && !meta.active
    console.log(meta)
    return (
        <div className={style.field_container}>
            <input {...input} {...props} 
                className={`${props.className} ${hasError && style.field_unvalid}`}/>
            {hasError && <span className={style.error}>{meta.error}</span>}
        </div>
    )
} 