import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/slice/userSlice";

function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  // async function fetchPost() {
  //   try {
  //     const res = await fetch(
  //       "https://66c973488a477f50dc30aaa5.mockapi.io/api/users"
  //     );
  //     const data = await res.json();
  //     dispatch(setUsers(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  if (loading) {
    return (
      <div className="w-full flex flex-wrap overflow-auto p-5 gap-5">
        Loading....
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full flex flex-wrap overflow-auto p-5 gap-5">
        Something went wrong
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap overflow-auto p-5 gap-5">
      {users &&
        (users.length < 1
          ? "No Users"
          : users.map((user) => <User key={user.id} user={user} />))}
    </div>
  );
}

export default Users;
