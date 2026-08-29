import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
function View_users() {
  const [allUsers,SetAllUsers]=useState([]);

  useEffect(()=>{
    viewUser()
  },[]);

  function viewUser()
  {
    fetch(`https://thoct-73d1c-default-rtdb.firebaseio.com/users.json`)
    //fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/users/-N4ftpVl3DspQzgUbc0k.json`)
    .then((resp)=>resp.json())
    .then((data)=>SetAllUsers(data));
  }





  function handelDelete(user_id){
    let ans=window.confirm("Are you sure want to delete !");
    if(ans)
    {
    fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/users/${user_id}.json`, {
      method: 'DELETE',
    }).then((resp)=>resp.json())
    .then((data)=>viewUser());
    }
  }
 
  const [formvalue,setFormvalue]=useState({
    "name":"",
    "username":"",
    "password":"",
    "mobile":""
  });
  const [EditId,SetEditId]=useState("");
  function handelEdit(item,name,username,password,mobile){
    setFormvalue({name,username,password,mobile});
    SetEditId(item);
    //setFormvalue({name:name,username:username,password:password,mobile:mobile});
   
  }

  function changehandel(e)
  {
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value});
      console.log(formvalue);
      console.log(EditId);
  }
  

  function updatehandel(e){
      e.preventDefault();
      fetch(`https://thoct-73d1c-default-rtdb.firebaseio.com/users/${EditId}.json`, {
      method: 'PATCH',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) =>{
      viewUser();
    });
  }

  const [statususer,Setstatus]=useState([]);
  function handelstatus(id)
  {
   
    fetch(`https://thoct-73d1c-default-rtdb.firebaseio.com/users/${id}.json`)
    //fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/users/-N4ftpVl3DspQzgUbc0k.json`)
    .then((resp)=>resp.json())
    .then((data)=>{
     if(data.status === "Block")
     {
      fetch(`https://thoct-73d1c-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Unblock"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        viewUser();
      });
     }
     else{
      fetch(`https://thoct-73d1c-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Block"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        viewUser();
      });
     }
      
    });

   
  }

  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              User Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>User Key</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Username</th>
                      <th>Delete</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                     Object.keys(allUsers).map((item,index)=>{
                      const {name,mobile,email,password,status}=allUsers[item];  
                      return(
                        <tr key={item} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{name}</td>
                          <td>{mobile}</td>
                          <td>{email}</td>
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>handelstatus(item)} className="btn btn-primary">{status}</button></td>
                          <td className="center"><button onClick={()=>handelEdit(item,name,email,password,mobile)} className="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit</button>
</td>
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
  
  
    {/* The Modal */}
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button type="button" className="close" data-dismiss="modal">×</button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
          <form name="sentMessage" id="contactForm" >
              <div className="form-row">
                <div className="col-sm-12 control-group">
                  <input type="text" name="name" value={formvalue.name} onChange={changehandel} className="form-control" required="required" placeholder='Enter Name' data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="col-sm-12 control-group">
                  <input type="text" name="username" value={formvalue.username} onChange={changehandel}  className="form-control" required="required" placeholder='Enter User Name' data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="col-sm-12 control-group">
                  <input type="password" name="password" value={formvalue.password} onChange={changehandel}  className="form-control" required="required" placeholder='Enter Password' data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="col-sm-12 control-group">
                  <input type="number" name="mobile" value={formvalue.mobile} onChange={changehandel} className="form-control" required="required"  placeholder='Enter Mobile' data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                
                <div className="col-sm-6 control-group">
                <button  className="btn btn-primary py-3 px-5" onClick={updatehandel} data-dismiss="modal" type="submit" id="sendMessageButton">Update</button>
                </div>
                
              </div> 
            </form>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</div>




    
  )
}

export default View_users