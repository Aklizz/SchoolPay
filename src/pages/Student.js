
import VerticalNav from "../components/common/VerticalNav";
import Nav from "../components/common/Nav";
import '../components/pages/Students/student.css';
import AddStudentHeader from "../components/pages/Students/AddStudentHeader";


import { useState } from "react";
import AddStudents from "../components/pages/Students/AddStudents";


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