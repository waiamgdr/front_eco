import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallOrders } from '../../../store/orderSlice';
import "./order.css"
import { Link } from 'react-router-dom';

const Orders = () => {
  
  const dispatch=useDispatch();
  const  {OrderData}=useSelector(state=>state.order);
let id;
  useEffect(()=>{
    dispatch(getallOrders())
   
   
  },[])
  
  return (
   
<div className="List-orders">
      <h1> New Orders  </h1>
      <hr/>


      <div className='listorder-allorder'>
      {OrderData.map((el)=> <> 
      <div className='order'>
      <div  className="box_client" >
        

      <h3>{el.owner.name} </h3>
      </div> 
      <div className='btn'>
      <button > <Link to="/orders">   Show Order  </Link> </button>
      </div></div>
     


 
 <hr className='hrr'></hr>
</>)}
      
      </div>
      </div>
  )
}

export default Orders