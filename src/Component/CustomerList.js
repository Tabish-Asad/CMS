import React from 'react'
import Customer from './Customer' 
import { deleteCustomer, getCustomerList } from '../BLL/CustomerBLL'
function CustomerList(props) {
  // let newArr=[];

//Method1
  // let newArr=props.arrCus.map((e,index)=>(<tr>
  //   <th scope="row">{index+1}</th>
  //   <td>{e.id}</td>
  //   <td>{e.name}</td>
  //   <td>{e.address}</td>
  //   <td>{e.mobileNo}</td>
  // </tr>))


//Method2
  // let Count=1
  // for(let e of props.arrCus){
  //   let row=<tr>
  //   <th scope="row">{Count}</th>
  //   <td>{e.id}</td>
  //   <td>{e.name}</td>
  //   <td>{e.address}</td>
  //   <td>{e.mobileNo}</td>
  // </tr>
  // newArr.push(row);
  // Count++;
  // }
  function btnDelete_Click(id){
    deleteCustomer(id)
    props.updateArrCustomer();
  }
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Delete</th>
      
      
    </tr>
  </thead>
  <tbody>
  {props.arrCus.map((e,index)=>(<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{e.id}</td>
    <td>{e.name}</td>
    <td>{e.address}</td>
    <td>{e.mobileNo}</td>
    <td><button onClick={()=>btnDelete_Click(e.id)} className='btn btn-danger'>Delete</button></td>
    
  </tr>))}    
  </tbody>
</table>
    </>
  )
}

export default CustomerList
