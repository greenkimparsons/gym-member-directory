import React from "react";

function Table(props) {
  console.log(props);
  // The data was coming in with the error because I didn't wrap it in JSX.
  const userData = props.users.map((user) => {
    return <div>{user.name.first}</div>;
  });
  console.log("This is the userData after returning as a div", userData);
  return (
    <div className="container">
      {userData}
      {/* You can run the function above inside the return as a jsx expression or do a function call above  */}
      {/* {props.users.map((user) => {
				return <div>{user.name.first}</div>;
			})} */}
    </div>
  );
}

export default Table;
