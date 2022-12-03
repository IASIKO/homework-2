import React from "react";
import Child from "./Child";

const userArray = [
  {
    name: "name1",
    lastname: "surname1",
    age: 27,
    id: 1,
  },
  {},
  {
    name: "name2",
    lastname: "surname2",
    age: 20,
    id: 2,
  },
];

function Pharent() {
  return (
    <ul>
      {userArray.map((user) => (
        <Child
          name={user.name}
          lastname={user.lastname}
          age={user.age}
          id={user.id}
        />
      ))}
    </ul>
  );
}

export default Pharent;
