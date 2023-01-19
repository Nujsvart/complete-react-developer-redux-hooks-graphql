import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nickName: "Yihua" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hi {this.state.nickName}</p>
          <button onClick={() => this.setState({ nickName: "Andrei" })}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
