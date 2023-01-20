import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jacky",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, i) => (
          <h1 key={i}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
