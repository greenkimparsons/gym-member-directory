import React from "react";

function Table(props) {
  console.log(props);
  const userData = props.users.map((user) => {
    return <div>{user.name.first}</div>;
  });
  console.log("This is the userData after returning as a div", userData);
  return (
      <div className="container">
          {userData}
          {/* You can run the fucntino above inside the return as a jsx expression or do a function call above */}
          {/* {props.users.map((user) => {
              return <div>{user.name.first}</div>;
          })} */}
      </div>
  );
}

export default Table;