import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/Post/Posts";
import Users from "./components/User/Users";
import AddPost from "./components/Post/AddPost";
import AddUser from "./components/User/AddUser";
import InternalLayout from "./components/InternalLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="post" element={<InternalLayout />}>
        <Route path="" element={<Posts />} />
        <Route path="add" element={<AddPost />} />
        <Route path="edit/:id" element={<Home />} />
      </Route>
      <Route path="users" element={<InternalLayout />}>
        <Route path="" element={<Users />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<Home />} />
      </Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
