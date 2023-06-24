import { TiUserAdd } from 'react-icons/ti';
import  './student.css';
import { FaSearch } from 'react-icons/fa';
function AddStudentHeader(){
    
    return(
    <>  
        <div className='addcomponent'>
            <div >
                <button className='add'>
                <TiUserAdd  size={'1.5em'}/>
                <p>Add Student</p>
                </button>
                </div> 
                <span className='rightComp'>
                    <div className='globalSearch '>
                    <div >
                        <p>global Search</p>
                    </div>
               </div>
               <div className='search'>
                    <input className='headInput' size={30} type="text" placeholder='Search'/>
                    <p className='icon'><FaSearch/></p>
                    
                </div>
                </span>
               

            
            

        </div>
        
    </>
    );
}
export default AddStudentHeader;