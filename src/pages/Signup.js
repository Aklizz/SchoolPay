import React from "react";

import SignupForm from "../components/pages/signup/SignupForm";
import Nav from "../components/common/Nav";
import VerticalNav from "../components/common/VerticalNav";

function Signup(){
    return(
        <div>
            <div className="page">
            <VerticalNav/>
            <div>
                <Nav/>
                <SignupForm/>
            </div>
            </div>
        </div>
    )
}
export default Signup;