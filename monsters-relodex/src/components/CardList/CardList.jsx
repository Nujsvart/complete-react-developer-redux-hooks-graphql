import React from "react";

class CardList extends React.Component {
  render(props) {
    const { filteredMonsters } = this.props;
    return (
      <div>
        {filteredMonsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
