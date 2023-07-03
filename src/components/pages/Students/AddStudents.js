import React, { useState, useEffect } from "react";
import {FaEdit, FaReceipt} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

import './student.css';
import axios from "axios";
import { Link } from "react-router-dom";
const AddStudents = ({ onSubmit}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('  http://localhost:3030/students')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    
     
   
    return(
           
              <div className="AddContainer">
                <div className="table container">
                    <table >
                        <thead >
                            <tr className="TableHead">
                                <th className="tableCell">ID</th>
                                <th className="tableCell">First Name</th>
                                <th className="tableCell">Middle Name</th>
                                <th className="tableCell">Last Name</th>
                                <th className="tableCell">Section</th>
                                <th className="tableCell"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d,i) => (
                                <tr key={i}>
                                    <td className="tableCell">{d.Id}</td>
                                    <td className="tableCell">{d.FirstName}</td>
                                    <td className="tableCell">{d.MiddleName}</td>
                                    <td className="tableCell">{d.LastName}</td>
                                    <td className="tableCell">{d.Section}</td>
                                    <td  className="btnColumn">
                                        
                                        <Link to={'/pages/Form'}> <FaEdit/> </Link>
                                        <button className="deleteBtn" ><MdDelete/></button>
                                        <button className="receiptBtn" ><FaReceipt/></button>
                                    </td>
                                    
                                </tr>
                            ))
                            }
                            
                        </tbody>
                    </table>
                </div>

              </div>          
                
            
            

    )
        
    
}
export default AddStudents;