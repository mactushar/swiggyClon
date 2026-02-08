import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import DetailCarasoul from "./components/layout/DetailCarasoul";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AdminDasboard from "./components/layout/adminLayout/AdminDasboard";
import AdminLayout from "./components/layout/adminLayout/AdminLayout";
import User from './components/layout/adminLayout/User'
import Restaurent from "./components/layout/adminLayout/Restaurent";
import AddRestaurent from "./components/layout/adminLayout/AddRestaurent";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection/:id/:type" element={<DetailCarasoul />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route element={<ProtectedRoute/>}>
          <Route path="/profile" />
          <Route path="/userdashbord"/>

          </Route>
        </Route>

        <Route  path="admin" element={<AdminLayout/>}>
        <Route index element={<AdminDasboard/>}/>
        <Route path="users" element={<User/>} />
        <Route path="restaurant" element={<Restaurent/>} />
         <Route path="restaurant/add" element={<AddRestaurent/>} />

        

        </Route>

      </Routes>
    </>
  );
};
export default App;
