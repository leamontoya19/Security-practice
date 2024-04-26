import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

import ProtectedRoute from "./ProtectedRoute";


//3)Setting Layout
const Layout = () => {
  return(
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  );
};

//2)Creating the Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>,
        element:<ProtectedRoute/>
      },
      {
        path: "/write",
        element: <Write/>,
        element:<ProtectedRoute/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  // {
  //   path: "/write",
  //   element: <Write/>,
  // },
  // {
  //   path: "/single",
  //   element: <Single/>,
  // },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </div>
  );
}


export default App;
