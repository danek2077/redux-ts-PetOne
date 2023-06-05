import React from "react";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const UserList = () => {
  const users = useSelector((state: RootState) => state.UsersSlice.users);
  
  return (
    <div>
      {users.length !== 0 ? users.map((val, ind) => (
        <UserItem key={val.id} ind={ind} {...val} />
      )) : <h1>Пустенько</h1>}
    </div>
  );
};

export default UserList;
