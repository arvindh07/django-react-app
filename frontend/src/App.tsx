import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRoute from "./pages/AuthRoute";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    children: [
        {
          path:"/",
          element: <Home />
        }
    ]
  },
  {
    path: "/login",
    element: <Form method="LOGIN" />
  },
  {
    path: "/register",
    element: <Form method="REGISTER" />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
