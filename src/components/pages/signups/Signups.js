import React from "react";
import SignupForm from "./SignupForm";
import VerticalNav from "../../common/VerticalNav";
import Nav from "../../common/Nav";
function Signups(){
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
export default Signups;