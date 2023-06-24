import VerticalNav from "../../common/VerticalNav";
import Nav from "../../common/Nav";
import './student.css';
import AddStudentHeader from "./AddStudentHeader.js";


import StudentList from "./StudentsList";
import { useState } from "react";
import AddStudents from "./AddStudents";


function Student(){
    /*const [studentList, setStudentList] = useState([]);*/
    
   //when add student button clicked move to Student Form page  
    return(
        <div >
            <div className="page">
                <VerticalNav/>
                <div>
                    <Nav/>
                    <div>
                        <AddStudentHeader/>
                        <AddStudents/>
                    </div>
                
                

                </div>
                
                 
            </div>
            
                
        </div>

    );
//use react router for changing the pages
}
export default Student