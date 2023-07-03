import React from "react";
import { useState } from "react";
import '../pages/Students/student.css'
const Form = () => {
  const [values, setValues] = useState({
    Id: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Grade: "",
    Section: "",
  });
  
const handleSubmit = (event) =>{
  event.preventDefault();
}
const onChangeHandler = (event) =>{
 setValues({...values, [event.target.name]: event.target.value});
}

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="Id labeledInput">
          <label> Reg ID</label>
          <input
            type="text"
            className="inId"
            name="Id"
            onChange={onChangeHandler}
            placeholder="ID"
            autoComplete="none"
          />
        </div>
        <div className="Fname labeledInput">
          <label> First Name</label>
          <input
            type="text"
            name="FirstName"
            className="inFname"
            onChange={onChangeHandler}
            placeholder="First name"
        
            
          />
        </div>
        <div className="Mname labeledInput">
          <label> Middle Name</label>
          <input
            type="text"
            name="MiddleName"
            className="inMname"
            onChange={onChangeHandler}
            placeholder="Middle Name"
            autoComplete="none"
          />
        </div>
        <div className="Lname labeledInput">
          <label> Last Name</label>
          <input
            type="text"
            className="LastName"
            onChange={onChangeHandler}
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div className="Grade labeledInput">
          <label> Grade</label>
          <input
            type="number"
            className="inGrade"
            onChange={onChangeHandler}
            name="Grade"
            placeholder="Grade"
          />
        </div>
        <div className="Sec labeledInput">
          <label> Section</label>

          <input
            type="text"
            className="inSec"
          onChange={onChangeHandler}
            name="Section"
            placeholder="Section"
          />
        </div>

        <div className="Payment labeledInput">
          <label>Payment Type</label>
          <select name="paymentType" className="selectPayment">
            <option value="Registration+Sept"> Registration + Sept.</option>
            <option value="monthly">Monthly</option>
            <option value="Termly">Termly</option>
            <option value="Half">Half Pay</option>
            <option value="Staff+Registration">Staff + Registration</option>
            <option value="staffwithoutRegistration">
              {" "}
              Staff without Registration
            </option>
            <option value="Full Sponsor">Full Sponsor</option>
            <option value="Registraationonly"> Registration Only</option>
            <option value="MOC">MOC</option>
          </select>
        </div>
        <button className="addBtn">
          Add
        </button>
        <button className="backBtn"> Back</button>
        <div></div>
      </form>
    </div>
  );
};
export default Form;
