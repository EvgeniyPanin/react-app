import React from "react";

class UserStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input
            autoFocus={true}
            onBlur={this.handlerOffEdit}
            value={this.props.aboutMe}
            type="text"
          />
        ) : (
          <p onClick={this.handlerOnEdit}>{this.props.aboutMe}</p>
        )}
      </div>
    );
  }

  handlerOnEdit = () => {
    this.setState({
      editMode: true,
    });
  };

  handlerOffEdit = () => {
    this.setState({
      editMode: false,
    });
  };
}

export default UserStatus;
