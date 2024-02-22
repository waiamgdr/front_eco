
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from  '../../assets/Product_Cart.svg'
import list_product_icon from  '../../assets/Product_list_icon.svg'
import user_group_icon from  '../../assets/user-group.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>

<Link to ={'/addproduct'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img src={add_product_icon}/> 
        <p>Add Product</p>
        <hr/>
    </div>
     </Link>
     <Link to ={'/listproduct'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img src={list_product_icon}/> 
        <p>List Product</p>
        <hr/>
    </div>
     </Link>
     <Link to ={'/alluser'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img  className="user" src={user_group_icon}/> 
        <p>All Users</p>
        <hr/>
    </div>
    </Link>
     <Link to ={'/orders'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img  className="user" src={user_group_icon}/> 
        <p>All  Orders </p>
    </div>
     </Link>





    </div>
  )
}

export default Sidebar