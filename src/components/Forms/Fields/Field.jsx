import React from 'react';
import style from './Field.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = (!meta.pristine || meta.touched) && meta.error;
    return (
        <div className={style.field_container}>
            <input {...input} {...props} 
                className={`${props.className} ${hasError && style.field_unvalid}`}/>
            {hasError && <span className={style.error}>{meta.error}</span>}
        </div>
    )
} 