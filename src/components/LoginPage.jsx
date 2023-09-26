
import './loginPage.css';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function LoginPage() {

     const navigate = useNavigate();

    async function checkUser(objofinput){
        console.log(objofinput)
        try {
            const DataFromLogin = await axios.post("http://localhost:5000/users/loginFunc", objofinput);
            console.log(DataFromLogin.data.token,"token")
            console.log(DataFromLogin.data.isAdmin,"isadmin")
            localStorage.setItem("token", DataFromLogin.data.token)
            localStorage.setItem("username", objofinput.username)
            if (DataFromLogin.data.isAdmin==false){
                navigate('Worker')
            }else{
                navigate('Manager')
            }
          } catch (err) {
            console.log(err.response?.data);
            alert(err.response?.data)
          }
        
    }
    const {register, handleSubmit}=useForm();
    return(
      <div id="login-container">
        <div id="login-inner">
          <h1 id='login-tittle'>Log in</h1>
          <form onSubmit={handleSubmit((data)=>{checkUser((data))})}>
          <div className='username-login-container'> 
            <div className="login-div">
              <span className="user">Username</span>
              <input className='login-input' type='text' {...register("username")}></input>
            </div>
          </div>
          <div className='username-login-container'>
            <div className="login-div">
              <span className="user">Password</span>
              <input className="login-input" type='password' {...register("password")}></input>
            </div>
          </div>
          <div id="divofsubmit-btn"><button id="login-btn" type="submit">Sign In</button></div>
          </form>
          </div>
    </div>
    )
}
export default LoginPage;
