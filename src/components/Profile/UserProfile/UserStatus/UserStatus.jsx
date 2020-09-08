import React, {useState, useEffect} from "react";
import style from './UserStatus.module.css';

const UserStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const handlerOnEdit = () => {
    setEditMode(true)
  };

  const handlerOffEdit = () => {
    props.setUserStatus(status)
    setEditMode(false)
  };

  const handlerOnChange = (evt) => {
    setStatus(evt.target.value)
  };
  return (
    <div>
      {editMode ? (
        <input
          className={style.input}
          onChange={handlerOnChange}
          autoFocus={true}
          onBlur={handlerOffEdit}
          value={status}
          type="text"
        />
      ) : (
        <p onClick={handlerOnEdit}>
          {status}
        </p>
      )}
    </div>
  );
}

export default UserStatus;
