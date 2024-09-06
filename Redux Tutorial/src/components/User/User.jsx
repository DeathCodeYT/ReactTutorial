import React from "react";
import { Link } from "react-router-dom";
import { deleteUser, updateUser } from "../../store/slice/userSlice";
import { useDispatch } from "react-redux";

function User({user}) {
  const dispatch = useDispatch()
  return (
    <article className="rounded-xl border-2 border-gray-100 h-max bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="size-14 rounded-lg object-cover"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {user.name}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            {user.email}
          </p>
          <div className="flex items-center gap-10 mt-5 text-white">
            <button onClick={()=>dispatch(updateUser(user.id))} className="p-2 bg-blue-600 rounded-md">
              Edit
            </button>
            <button onClick={()=>dispatch(deleteUser(user.id))} className="p-2 bg-red-600 rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default User;
