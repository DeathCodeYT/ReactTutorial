import React, { useEffect } from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../store/slice/postSlice';

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPost());
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
    {posts &&
      (posts.length < 1
        ? "No Users"
        : posts.map((post) => <Post key={post.id} post={post} />))}
  </div>
  )
}

export default Posts