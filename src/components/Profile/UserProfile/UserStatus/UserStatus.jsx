import React from "react";
import style from './UserStatus.module.css';

class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  render() {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
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
