import React from "react";
import './student.css';
function RightComponent(){
    
    return(
        <div className="rightComponent">
            <p>Number of Students</p>
            <div className="sections">
                    <div className="sect">
                        <h3 className="head">A</h3>
                        <div className="darkDisplay">00</div>
                    </div>
                    <div className="sect">
                        <h3 className="head">B</h3>
                         <div className="darkDisplay">00</div>
                    </div>
                    <div className="sect">
                        <h3 className="head">C</h3>
                         <div className="darkDisplay">00</div>
                    </div>
                    <div className="sect">
                        <h3 className="head">D</h3>
                         <div className="darkDisplay">00</div>
                    </div>
                    <div className="sect">
                        <h3 className="head">Total</h3>
                         <div className="darkDisplay">000</div>
                    </div>
            </div>
        </div>
    )
}
export default RightComponent;