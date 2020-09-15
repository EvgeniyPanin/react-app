import React from 'react';
import style from './UploadFile.module.css';

const UploadFile = (props) => {
    return (
        <div>
            <input className={style.input_file} type="file" name="file" id="file" onChange={props.fileLoader}/>
            <label className={`btn ${style.btn_tertiary} ${style.js_labelFile}`} for="file">
            <i className={`${style.icon} fa fa_check`}></i>
            <span className={style.description}>Изменить</span>
            </label>
        </div>
    )
}

export default UploadFile;