import React from "react";
const StudentsList =(props) =>{
    return(
        <div>
            {props.students.map((inputData, index)=>(
                <div key={index}>
                    <p> {inputData.RegId}</p>
                    <p> {inputData.FirstName}</p>
                    <p> {inputData.MiddleName}</p>
                    <p> {inputData.LastName}</p>
                </div>
            ))}
        
        </div>
    )
}
export default StudentsList;