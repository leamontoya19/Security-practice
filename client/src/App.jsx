import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Posts from "./pages/Posts"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

import ProtectedRoute from "./ProtectedRoute";
import { PostProvider } from "./context/PostsContext";



// //3)Setting Layout
// const Layout = () => {
//   return(
//     <>
//      <Navbar/>
//      <Outlet/>
//      <Footer/>
//     </>
//   );
// };

// //2)Creating the Router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },

//       {
//         path: "/posts",
//         element: (<ProtectedRoute><Posts/></ProtectedRoute>),
//       },

//       {
//         path: "/post/:id",
//         element: (<ProtectedRoute><Single/></ProtectedRoute>),
        
//       },

//       {
//         path: "/write",
//         element: (<ProtectedRoute><Write/></ProtectedRoute>),
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <Register/>,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },

// ]);


function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
        <div className="app">
          <div className="container">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route element={<ProtectedRoute/>}>
                <Route path="/write" element={<Write/>} />
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/:id" element={<Single/>} />
              </Route>  
            </Routes>
            <Footer/>
          </div>
        </div>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
