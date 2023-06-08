import { useState } from 'react';
import Header from '../../Header';
import './styles.css'
import { useNavigate } from 'react-router-dom';
const Newsletter = () => {
    const [userName, setUserName]=useState ('');
    const [userPassword, setUserPassword]=useState ('')
    const [userEmail, setUserEmail]=useState ('')
    const navigate = useNavigate ()

    const handleClick = () => {
        if (userName !== '' && userPassword !== '' && userEmail !== ''){
          const inputvalues = {
            user : userName,
            password : userPassword,
            userEmail : userEmail
          }
          localStorage.setItem ('inputvalues', JSON.stringify (inputvalues))
           navigate ('/')

        }
    }
   
    return (
        <>
        <Header />
        <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" 
      value={userName} 
      onChange={(event) => setUserName 
      (event.target.value)} required />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" 
      value={userPassword} 
      onChange={(event) => setUserPassword (event.target.value)} 
      required/>
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="email" 
      value={userEmail} 
      onChange={(event => setUserEmail (event.target.value))} 
      required/> 
        
      <label>Email</label>
    </div>
    <button type='submit' 
      onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
        </>

    )

}

export default Newsletter;