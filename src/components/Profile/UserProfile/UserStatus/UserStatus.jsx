import React from "react";
import style from './UserStatus.module.css';

class UserStatus extends React.Component {
  constructor(props) {
    super()
    this.state = {
      editMode: false,
      status: props.status
    };
  }

  render() {
    if (this.state.status === null) {
      this.setState({status: 'Нажмите здесь, чтобы добавить статус'})
    } 
    return (
      <div>
        {this.state.editMode ? (
          <input
            className={style.input}
            onChange={this.handlerOnChange}
            autoFocus={true}
            onBlur={this.handlerOffEdit}
            value={this.state.status}
            type="text"
          />
        ) : (
          <p onClick={this.handlerOnEdit}>
            {this.state.status}
          </p>
        )}
      </div>
    );
  }

  handlerOnChange = (evt) => {
    this.setState({
      status: evt.target.value
    });
  };

  handlerOnEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  handlerOffEdit = () => {
    this.props.setUserStatus(this.state.status)
    this.setState({
      editMode: false,
    });
  };
}

export default UserStatus;
