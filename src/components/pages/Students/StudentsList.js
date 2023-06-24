import React from "react";
import './student.css';
const StudentList = (props) => {
    return (
        <div className="output">
                <ul >
            {props.students.map((student) =>(
                <li>{student.FirstName} {student.LastName}</li>
            ))}
        </ul>
        </div>
        
    );
        
};
export default StudentList;
    
