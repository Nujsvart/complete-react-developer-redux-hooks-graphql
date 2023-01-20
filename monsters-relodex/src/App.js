import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      filterText: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");

    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      return this.setState({ monsters: [...users] });
    };

    getUsers();
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.filterText)
    );

    const filterMonsters = e => {
      return this.setState({ filterText: e.target.value.toLowerCase() });
    };

    console.log(filteredMonsters);

    console.log("render");
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={filterMonsters}
        />

        {filteredMonsters.map(monster => (
          <div key={monster.id}>
            <h1> {monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
