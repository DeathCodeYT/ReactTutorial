import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
        state.posts = [];
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.posts = [];
      });
    builder
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = state.posts.map(post=>{
            if(post.id==action.payload.id){
                return action.payload
            }
            return post
        })
      })
      .addCase(updatePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts.push(action.payload)
      })
      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = state.posts.filter(post=>post.id!=action.payload.id)
      })
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const fetchPost = createAsyncThunk("fetchPost", async () => {
  const res = await fetch(
    "https://66c973488a477f50dc30aaa5.mockapi.io/api/posts"
  );
  return res.json();
});
export const addPost = createAsyncThunk("addPost", async () => {
  const res = await fetch(
    "https://66c973488a477f50dc30aaa5.mockapi.io/api/posts",{method:"POST"}
  );
  return res.json();
});
export const updatePost = createAsyncThunk("updatePost", async (id) => {
  const res = await fetch(
    `https://66c973488a477f50dc30aaa5.mockapi.io/api/posts/${id}`,{method:"PUT"}
  );
  return res.json();
});
export const deletePost = createAsyncThunk("deletePost", async (id) => {
  const res = await fetch(
    `https://66c973488a477f50dc30aaa5.mockapi.io/api/posts/${id}`,{method:"DELETE"}
  );
  return res.json();
});
export const {} = postSlice.actions;
export default postSlice.reducer;
