import React, { useState } from "react";
import Users from "./User";

function App() {
<CustomButton text="Add User" type="primary"/>

  const [users, setUsers] = useState([
    { "id": 1, "name": "tariq", "email": "tariq@gmail.com", "isBlocked": true },
    { "id": 2, "name": "anas", "email": "anas@gmail.com", "isBlocked": false },
    { "id": 3, "name": "hala", "email": "thalaariq@gmail.com", "isBlocked": true },
    { "id": 4, "name": "asmaa", "email": "asmaa@gmail.com", "isBlocked": true },
    { "id": 5, "name": "samah", "email": "samah@gmail.com", "isBlocked": true },
  ]);


  return (
    <div className="users" >

      {users.map((user) => (
        <Users key={user.id} name={user.name} email={user.email} />
      ))}

    </div>
  )
}
export default App;
