
import React from "react";
import CustomButton from "./shared/CustomButton";

function Users(props) {
  return (
    <div className="user">
      <h2>name is {props.name}</h2>
      <h3>email is {props.email}</h3>
      <CustomButton text="Details" type="primary"/>
      <CustomButton text="Delete" type="danger"/>
   </div>
  );
}

export default Users;
