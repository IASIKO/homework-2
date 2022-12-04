import React from "react";
import Child from "./Child";

const userArray = [
  {
    name: "name1",
    lastname: "surname1",
    age: 27,
    id: 1,
  },
  {
    name: "name2",
    lastname: "surname2",
    age: 20,
    id: 2,
  },
];

const isUserLoggedIn = true;

function Pharent() {
  return <Child array={userArray} userLoggedIn={isUserLoggedIn} />;
}

export default Pharent;
