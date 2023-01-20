import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      filterText: "",
    };
  }

  componentDidMount() {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      return this.setState({ monsters: [...users] });
    };

    getUsers();
  }

  onSearchChange = e => {
    const filterText = e.target.value.toLowerCase();
    return this.setState({ filterText });
  };

  render() {
    //optimizations
    const { monsters, filterText } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(filterText)
    );

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={onSearchChange}
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
