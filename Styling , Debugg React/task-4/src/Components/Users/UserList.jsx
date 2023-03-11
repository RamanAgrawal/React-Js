import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.map((user) => {
        return (
          <li key={user.name}>
            Name : {user.name} , Age : ({user.age} Years Old) , College :{" "}
            {user.college}
          </li>
        );
      })}
    </Card>
  );
};

export default UserList;
