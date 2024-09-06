import React from "react";
import { deletePost, updatePost } from "../../store/slice/postSlice";
import { useDispatch } from "react-redux";

function Post({post}) {
  const dispatch = useDispatch();
  return (
    <article className="rounded-lg border w-[400px] border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <span className="inline-block rounded bg-blue-600 p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      <a href="#">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {post.title}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {post.description}
      </p>

      <div className="flex items-center justify-between mt-5 text-white">
        <button onClick={()=>dispatch(updatePost(post.id))}  className="p-3 bg-blue-600 rounded-md">Edit</button>
        <button onClick={()=>dispatch(deletePost(post.id))} className="p-3 bg-red-600 rounded-md">Delete</button>
      </div>
    </article>
  );
}

export default Post;
