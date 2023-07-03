import React from "react";
import { useState } from "react";
import './signups.css';

function SignupForm(){
    const [signupData, setSignupData] = useState({
        userName : '',
        password : ''
    });
    const onChangeHandler = (e) =>{
        let name= e.target.name;
        let value= e.target.value;
        setSignupData({...signupData, [name] : value});
}
    return(
        <div className="ContainSignup">
            


            <form>
                
                <div>
                    <label htmlFor="userName"> UserName</label>
                    <input type="text" value={signupData.userName} name="userName" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={signupData.password} name="password" onChange={onChangeHandler}/>
                </div>
                <div className="ContainBtn">
                    <button className="btnLogin">Login</button>
                    <button className="btnSign" >Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default SignupForm;