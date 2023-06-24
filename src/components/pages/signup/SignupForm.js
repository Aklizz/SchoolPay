import React from "react";
import './signup.css';
function SignupForm(){
    let userName = "";
    let password = "";
    return(
        <div className="ContainSignup">
            


            <form>
                
                <div>
                    <label htmlFor="name"> UserName</label>
                    <input type="text" value={userName} name="name"/>
                </div>
                <div>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" value={password} name="pwd"/>
                </div>
                <div className="ContainBtn">
                    <button className="btnSign">Login</button>
                    <button className="btnSign">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default SignupForm;