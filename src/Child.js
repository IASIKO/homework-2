import React from "react";

function Child(props) {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.lastname}</p>
      <p>{props.age}</p>
      <p>{props.id}</p>
    </li>
  );
}

export default Child;
