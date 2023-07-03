import react, {useState} from 'react';

import AddStudents from './AddStudents';
import VerticalNav from '../../common/VerticalNav';
import Nav from '../../common/Nav';
import AddStudentHeader from './AddStudentHeader';
import CounterDisplay from './CounterDisplay';

function Students(){
    
    return(
        <div >
            <div className="page">
                <VerticalNav/>
                <div>
                    <Nav/>
                    <div>
                        <AddStudentHeader/>
                            <div className='flex'>
                                <AddStudents className="addStudents"/>
                                <CounterDisplay className="counterDisplay"/>
                            </div>

                       
                        
                    </div>
                
                

                </div>
                
                 
            </div>
            
                
        </div>

    );
////////////uffffffffffff
}
export default Students;