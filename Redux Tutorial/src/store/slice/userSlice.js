import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.users = [];
      });
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users = state.users.map(user=>{
            if(user.id==action.payload.id){
                return action.payload
            }
            return user
        })
      })
      .addCase(updateUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users.push(action.payload)
      })
      .addCase(addUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users = state.users.filter(user=>user.id!=action.payload.id)
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const res = await fetch(
    "https://66c973488a477f50dc30aaa5.mockapi.io/api/users"
  );
  return res.json();
});
export const addUser = createAsyncThunk("addUser", async () => {
  const res = await fetch(
    "https://66c973488a477f50dc30aaa5.mockapi.io/api/users",{method:"POST"}
  );
  return res.json();
});
export const updateUser = createAsyncThunk("updateUser", async (id) => {
  const res = await fetch(
    `https://66c973488a477f50dc30aaa5.mockapi.io/api/users/${id}`,{method:"PUT"}
  );
  return res.json();
});
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const res = await fetch(
    `https://66c973488a477f50dc30aaa5.mockapi.io/api/users/${id}`,{method:"DELETE"}
  );
  return res.json();
});
export const {} = userSlice.actions;
export default userSlice.reducer;
