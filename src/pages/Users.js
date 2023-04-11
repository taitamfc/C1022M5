import React, { useEffect, useState } from "react";
import UserModel from "../models/UserModel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Users(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserModel.getAll()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const handleDelete = (id) => {
    UserModel.delete(id)
      .then((res) => {
        // navigate("/");
		window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("da co loi xay ra ");
      });
  };
  return (
    <div>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={"/users/" + user.id}>Xem</Link>|
                <Link to={"/users/" + user.id + "/edit"}>Sua</Link>|
                <button id="button2" onClick={ () => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
