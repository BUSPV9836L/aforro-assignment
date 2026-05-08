import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import UsersTable from "./pages/users-table.jsx";

export default function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <UsersTable />,
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
