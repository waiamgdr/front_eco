
import React, { useEffect } from "react";

import {  useDispatch, useSelector} from 'react-redux'
import { getalluser } from "../../../store/Userslice";
const Alluser = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
     dispatch(getalluser())
  },[]) 
  const  users=useSelector(state=>state.user)
console.log(typeof (users.users))
const alluser=users.users
console.log("alluser", alluser)

  return (
    <div>
{Array.isArray(alluser) && alluser.map((el)=>( <>
<h6> name: {el.name}</h6>
<h6> email: {el.email}</h6>

 </>))}
        
    </div>
  )
}

export default Alluser




