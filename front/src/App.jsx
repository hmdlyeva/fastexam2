import './App.css'
import Home from './pages/home/Home'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
