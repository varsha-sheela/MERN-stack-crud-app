import React,{component}from "react";
import axios from "axios";
export default class App extends React.Component{
constructor(){
super();
this.state={
  products:[]
};
};
componentDidMount(){
  axios.get("http://localhost:8080/products").then((posRes)=>{
    this.setState({products:posRes.data})
  },(errRes)=>{
    console.log(errRes);
  });
};
render(){
return(<div>
<table border="1" cellpadding="10px" cellspacing="10px" align="center">
<thead>
  <tr>
    <th>SNO</th>
    <th>ID</th>
    <th>NAME</th>
    <th>COST</th>
  </tr>
</thead>
<tbody>
  {this.state.products.map((element,index)=>(
<tr>
<td>{index+1}</td>
<td>{element.p_id}</td>
<td>{element.p_name}</td>
<td>{element.p_cost}</td>
</tr>
  ))}
  
</tbody>
</table>
</div>)
};
};
