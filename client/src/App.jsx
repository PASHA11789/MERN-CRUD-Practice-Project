import "./App.css";
import User from "./getUser/user";
import AddUser from "./addUser/AddUser";
import { Toaster } from "react-hot-toast"; // Import this
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
  ]);
  return (
    <div>
      <Toaster />
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
