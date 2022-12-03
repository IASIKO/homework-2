import React from "react";

function Child(props) {
  return (
    <li>
      {props.length > 0 ? 'yle' : "no users in the system"}
      <p>{props.name}</p>
      <p>{props.lastname}</p>
      <p>{props.age}</p>
      <p>{props.id}</p>
    </li>
  );
}

export default Child;
