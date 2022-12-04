import React from "react";

function Child(props) {
  let error;

  if (!props.userLoggedIn) {
    error = "you are not authorized to see user list";
  } else if (!props.array.length) {
    error = "no users in the system";
  }

  return (
    <>
      {error && <span>{error}</span>}
      {!error && (
        <ul>
          {props.array.map((user) => {
            return (
              <li>
                <p>{user.name}</p>
                <p>{user.lastname}</p>
                <p>{user.age}</p>
                <p>{user.id}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Child;
