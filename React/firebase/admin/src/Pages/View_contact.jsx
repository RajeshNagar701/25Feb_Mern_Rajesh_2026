import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function View_contact() {

  const [allContact,SetAllContacts]=useState([]);
  useEffect(()=>{
    viewContacts()
  },[]);

  function viewContacts()
  {
    fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/contacts.json`)
    .then((resp)=>resp.json())
    .then((data)=>SetAllContacts(data));
  }

  const navigate=useNavigate();
  

  function handelDelete(contact_id){
    let ans=window.confirm("Are you sure want to delete !");
    if(ans)
    {
      
    fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/contacts/${contact_id}.json`, {
      method: 'DELETE',
    }).then((resp)=>resp.json())
    .then((data)=>viewContacts());
    }
  }

  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View Contact</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Contact Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Contact Key</th>
                      <th>Email</th>
                      <th>Masg</th>
                      <th>Name</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                     Object.keys(allContact).map((item,index)=>{
                      const {email,message,name}=allContact[item];  
                      return(
                        <tr key={index} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{email}</td>
                          <td>{message}</td>
                          <td>{name}</td>
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>navigate(`/view_contact/${item}`)} className="btn btn-primary">Edit</button></td>
                        </tr>
                      )
                     })
                   } 
                    
                    
          
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default View_contact