import VerticalNav from "../../common/VerticalNav";
import Nav from "../../common/Nav";
import './student.css';
import AddStudentHeader from "./AddStudentHeader.js";
import StudentList from "./StudentsList";
import { useState } from "react";
import AddStudents from "./AddStudents";

function StudentForm(){
    /*const [studentList, setStudentList] = useState([]);*/
    
    
    return(
        <div >
            <div className="students">
                <VerticalNav/>
                <div>
                    <Nav/>
                <AddStudentHeader/>
                <AddStudents/>
            
                
                </div>
                 
            </div>
            
                
        </div>

    );
//use react router for changing the pages
}
export default StudentForm