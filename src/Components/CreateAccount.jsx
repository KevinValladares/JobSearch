import React from 'react'
import '../Style/CreateAccount.css'
const CreateAccount = () => {
  return (
   
<div className="Sign-Login">

<div className="form-container">


    <h1 className="title">My account</h1>


    <form action="/" className="formSign">

        <div>

            <label className="label">Name</label>
            <input type="text" id="name" className="input input-name"/>

            <label  className="label">Email address</label>
            <input type="email" id="email" className="input input-email"/>

            <label  className="label">Password</label>
            <input type="password" id="password" placeholder="********" className="input input-password"/>
       
        </div>

        <input 
        type="submit" 
        value="Create" 
        className="primary-button Sign-button"/>

    </form>

</div>

</div>

  )
}


export default CreateAccount