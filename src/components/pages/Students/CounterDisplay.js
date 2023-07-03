import React from "react";
import { useState } from "react";
import './student.css';
function CounterDisplay(){
    let paidCounter = 0;
    let overdueCounter = 0;
    
    return(
        <div className="CounterDisplay">
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
            <h5 className="paymentStatus">PAYMENT STATUS</h5>
            <div className="paymentStatus">
                <div className="upperPayment">
                        <p className="p">payment</p>
                    <div>
                       <p>Termly</p>
                       <p>First Term</p>
                    </div>
                </div>
                <div className="colorfull">
                     <div className="paid">
                        {paidCounter}
                        <p>paid</p>
                    </div>
                    <div className="overdue">
                        {overdueCounter}
                        <p>overdue</p>
                    </div>
                </div>
                   

            </div>
        </div>
    )
}
export default CounterDisplay;