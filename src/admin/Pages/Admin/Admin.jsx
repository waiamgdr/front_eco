import React from "react";
import AddProduct from '../../Components/AddProduct/AddProduct'
import Alluser from '../../Components/Allusers/Alluser'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Admin.css'
import{Routes,Route} from 'react-router-dom'
import Dashbord from "../../Dashbord"
import Order from "../../Components/dhashbord/Order";
const Admin = () => {
  return (
    <div  className="admin">

 <Sidebar/>
<Order/>





    </div>
  )
}

export default Admin