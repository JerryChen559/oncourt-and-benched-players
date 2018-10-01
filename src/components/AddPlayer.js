import React, { Component } from "react";

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.inputNames = this.inputNames.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  submitName() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  inputNames(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          placeholder="Add a player!"
          value={this.state.input}
          onChange={this.inputNames}
        />

        <button onClick={this.submitName}>Add Player</button>
      </div>
    );
  }
}

export default AddPlayer;
