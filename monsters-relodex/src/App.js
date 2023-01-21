import { Component } from "react";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

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
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
