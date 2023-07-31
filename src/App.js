import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/dashboard";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />

      
    </div>
  );
}

export default App;
