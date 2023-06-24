import React from "react";
import { useState } from 'react';
import './student.css';
function AddStudents(){
    
    const [inputArray, setInputArray] = useState([]);
     const[inputData, setInputData]  = useState({
        RegId: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Grade: '',
        Section: ''});
        function onChangeHandler(e){
            let name = e.target.name;
            let value = e.target.value;
             setInputData({...inputData, [name]:value});

        };
        
        function onSubmit(){
            let {RegId, FirstName, MiddleName, LastName, Grade, Section} = inputData;
            setInputArray([...inputArray, {RegId, FirstName, MiddleName, LastName, Grade, Section} ]);
            console.log({inputData});
            console.log({inputArray});
        }
        
    return(
            <div className='formContainer'>
                <form >
                    <div  className="Id labeledInput">
                        <label> Reg ID</label>
                        <input type="text" className="inId"  name='RegId' onChange={onChangeHandler} value={inputData.RegId} placeholder='ID' autoComplete='none'/>
                    </div>
                    <div className="Fname labeledInput">
                        <label> First Name</label>
                        <input type="text" name='FirstName' className="inFname"  value={inputData.FirstName} placeholder='First name'  autoComplete='none' onChange={onChangeHandler}/>
                    </div>
                    <div className="Mname labeledInput">
                        <label> Middle Name</label>
                        <input type="text" name='MiddleName' className="inMname" onChange={onChangeHandler} value={inputData.MiddleName} placeholder='Middle Name' autoComplete='none' />
                    </div>
                    <div className="Lname labeledInput">
                        <label> Last Name</label>
                        <input type="text" className="LastName" onChange={onChangeHandler} value={inputData.LastName} name='LastName' placeholder='Last Name' autoComplete='none'/>
                    </div>
                    <div className="Grade labeledInput">
                        <label> Grade</label>
                        <input type="number" className="inGrade" onChange={onChangeHandler} value={inputData.Grade} name='Grade' placeholder='Grade' autoComplete='none'/>
                    </div>
                    <div className="Sec labeledInput">
                        <label> Section</label>
                        
                        <input type="text" className="inSec" onChange={onChangeHandler} value={inputData.Section} name='Section' placeholder='Section' autoComplete='none'/>
                       
                         
                    </div>
                    
                    <div className="Payment labeledInput">
                        <label>Payment Type</label>
                        <select name="paymentType" className="selectPayment">
                            <option value="Registration+Sept"> Registration + Sept.</option>
                            <option value="monthly">Monthly</option>
                            <option value="Termly">Termly</option>
                            <option value="Half">Half Pay</option>
                            <option value="Staff+Registration">Staff + Registration</option>
                            <option value="staffwithoutRegistration"> Staff without Registration</option>
                            <option value="Full Sponsor">Full Sponsor</option>
                            <option value="Registraationonly"> Registration Only</option>
                            <option value="MOC">MOC</option>
                        </select>
                        
                    </div>
                    <button  onClick={onSubmit} className='addBtn'>Add</button>
                    <div>
                        
                    </div>
                    
                </form>
                
            </div>
            

    );
        
    
}
export default AddStudents;