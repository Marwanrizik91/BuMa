import React, { useState } from 'react';
//import { addUser } from '../../actions/users';
import { Redirect } from 'react-router';
//import { Input } from '@material-ui/core';

function RegistrationForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    firstName: 'First name',
    lastName: 'Last name',
    userName: 'Username',
    email: 'Email',
    password: 'Password'
  });


const style={
    table:{
        width:"90%",
        TextAlignment:"center",
        margin:"15px",
        padding:"15px"

    },
    input:{
        margin:"5px"
    }
}

  const handleChange = (e) => {
    setBusinessDetails({ ...businessDetails, [e.target.id]: e.target.value });
    console.log(businessDetails);
  }

  const handleSubmit = (event) => {
    // add new business(user) to the database
    //password confirm password are identical
   // addBusiness(businessDetails)

   // setRedirect(true);

    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tc pa4 vcenter">
      <table border="0" style={style.table}>
      <tr><td>
        <input
          id="firstName"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.firstName}
          required
        />
        </td><td>
        <input
          id="lastName"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.lastName}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <input
          id="userName"
          type="text"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.userName}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <input
          id="email"
          type="type"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.email}
          required
        />
         </td></tr>
         <tr><td>
         <input
            id="password"
            type="password"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder={businessDetails.password}
            required
          />
          </td><td>
          <input
            id="password2"
            type="password"
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder="Confirm Password"
            required
          />
          </td></tr>
          <tr ><td colspan="2" style={{textAlign:"center"}}>
        <input
          type="submit"
          value="Registration"
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "80%", marginTop:"50px"}}
        />
        </td></tr></table>
      </div>

      {/* {isRedirect && (
        <Redirect to={'/home'} />
      )} */}
    </form>
  );
}


export default RegistrationForm;