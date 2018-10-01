import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: {
        bench: ["Lebron", "Rondo", "Dirk"],
        court: ["Jordan", "Kobe", "Nash"]
      }
    };

    this.moveToBench = this.moveToBench.bind(this);
    this.moveToCourt = this.moveToCourt.bind(this);
  }

  moveToBench(name, i) {
    let { court, bench } = this.state.players;

    bench.push(court.splice(i, 1));

    this.setState({
      players: {
        bench: bench,
        court: court
      }
    });
  }

  moveToCourt(name, i) {
    let { court, bench } = this.state.players;

    court.push(bench.splice(i, 1));

    this.setState({
      players: {
        bench: bench,
        court: court
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Add a player!</h1>
          <h1 className="App-title">Click names to move!</h1>
          <p>Simple React App: updating state with another component</p>
        </header>
        <div>
          <List
            title="On Court"
            list={this.state.players.court}
            handleClick={this.moveToBench}
          />
          <List
            title="Benched"
            list={this.state.players.bench}
            handleClick={this.moveToCourt}
          />
        </div>
      </div>
    );
  }
}

export default App;
