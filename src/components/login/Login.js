
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./login.css";

const Login=()=> {
  const {signInWithGoogle,signInWithPasswordEmail,setEmail,setPassword}= useAuth();

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
            <form onSubmit={signInWithPasswordEmail}>
              <input onBlur={handeleEmail} placeholder="Email" className="loginInput" required/>
              <input onBlur={handelePassword} placeholder="Password" className="loginInput" required/>
              <button type='submit' className="loginButton">Log In</button>
            </form>
            
            <span className="loginForgot">Forgot Password?</span>
            <Link className="text-decoration-none" to='/register'><h5 className="text-primary text-center ">
              Create a New Account
            </h5></Link>
            
            <button  to='/register' onClick={signInWithGoogle} className="loginRegisterButton">
              Google SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;