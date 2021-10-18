import "./register.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register=()=> {
  const {error,createInWithPasswordEmail,setUsername,setEmail,setPassword}=useAuth();
  
  const handeleUsername=(e)=>{
      setUsername(e.target.value);
  }
  const handeleEmail=(e)=>{
      setEmail(e.target.value);
  }
  const handelePassword=(e)=>{
      setPassword(e.target.value);
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Health Care</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">

          <form onSubmit={createInWithPasswordEmail}>

              <input onBlur={handeleUsername} placeholder="Username" className="loginInput" required/>
              <input onBlur={handeleEmail} type='email' placeholder="Email" className="loginInput" required/>
              <input onBlur={handelePassword} type='password' placeholder="Password" className="loginInput" required/>
              <p className="text-danger text-center m-2 p-2">{error}</p>
              <button type='submit' className="loginButton">Sign Up</button>
            
            </form>
            
            
            <Link className="text-decoration-none" to='/login'><h5 className="text-primary text-center ">
            Go Login Page
            </h5></Link>
          </div>
        </div>
      </div>
    </div>
    
  );
 
}
export default  Register;
