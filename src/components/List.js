import React, { Component } from "react";
import AddPlayer from "./AddPlayer";

class List extends Component {
  constructor() {
    super();

    this.submitName = this.submitName.bind(this);
  }

  submitName(name) {
    this.props.list.push(name);
    this.forceUpdate();
  }

  render() {
    let list = this.props.list.map((item, i) => {
      return (
        <li key={i} onClick={this.props.handleClick.bind(null, item, i)}>
          {item}
        </li>
      );
    });

    return (
      <div>
        <h1>{this.props.title}</h1>
        <AddPlayer add={this.submitName} />
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;
