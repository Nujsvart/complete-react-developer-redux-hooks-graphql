import React from "react";
import Card from "../Card/Card";

import "./card-list.styles.css";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters?.map(monster => {
        const { name, email, id } = monster;
        return <Card key={id} name={name} email={email} id={id} />;
      })}
    </div>
  );
};

export default CardList;
