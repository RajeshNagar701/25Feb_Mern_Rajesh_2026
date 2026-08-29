import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Logincontext } from '../App';
import swal from 'sweetalert';

function Index() {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('auth_token'))
    {
        navigate('/dashboard');;
    }	
  },[]);


  const [logform,setLogform]=useState({
    email:"",
    password:""
  })

  function changehandel(e)
  {
      const {name,value}=e.target;
      setLogform({...logform,[name]:value});
      console.log(logform);
  }

  const {SetisLogin}=useContext(Logincontext);
  
  function submithandel(e)
  {
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbKKS7QP1cHErTc5c_Ru06SfM-OF05SA0`, {
      method: 'POST',
      body: JSON.stringify(logform),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) =>{
        if(data.localId)
        {
          localStorage.setItem('auth_token',data.localId)
          localStorage.setItem('auth_name',data.email)

          swal({
            title: "Success",
            text: "Login Success",
            icon: "success",
          });
          

          navigate('/dashboard');
          console.log(data);
        }
        else
        {
          swal({
            title: data.error.message,
            text: data.error.message,
            icon: "error",
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
          <h1 className="header-line">Admin Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Admin Login
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Enter Name</label>
                <input type="email" name="email" value={logform.email} onChange={changehandel} className="form-control" required />
              </div>
             
              <hr />
              <div className="form-group">
                <label>Enter Password</label>
                <input type="password" name="password" value={logform.password} onChange={changehandel} className="form-control" required/>
              </div>
             
              <hr />
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />Remember Me
                  </label>
                </div>
                <button className='btn btn-primary' onClick={submithandel}>Login </button>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index