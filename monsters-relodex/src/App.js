import { useState, useEffect } from "react";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setMonsters(data);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters?.filter(monster =>
      monster?.name.toLowerCase().includes(searchField)
    );

    setFilterMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
