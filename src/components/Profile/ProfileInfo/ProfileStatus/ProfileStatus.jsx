import React from "react";

class ProfileStatus extends React.Component {
  state = {
    status: "hjhjg",
    editMode: false,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }

  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <p onDoubleClick={this.activateEditMode.bind(this)}>
            {this.state.status}
          </p>
        )}
        {this.state.editMode && (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            type="text"
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
