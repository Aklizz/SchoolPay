import { TiUserAdd } from 'react-icons/ti';
import  './student.css';
import { FaSearch } from 'react-icons/fa';
import OnOffBtn from './OnOffBtn';
import { Link } from 'react-router-dom';

function AddStudentHeader(){
    
    return(
    <>  
        <div className='addcomponent'>
            <div >
                <Link to={'/pages/Forms'} className='add'>
                <TiUserAdd className='addIcon' />
                <p className='addTxt'>Add Student</p>
                </Link>
                </div> 
                <span className='rightComp'>
                    <div className='globalSearch '>
                    <div >
                        <OnOffBtn/>
                        <p style={{margin: "0px", paddingTop: "0px"}}>global Search</p>
                    </div>
               </div>
               <div className='searchContainer'>
                    <input type="text" placeholder='Search'/>
                    <button type='submit'><FaSearch className='searchIcon'/></button>
                    
                </div>
                </span>
               

            
            

        </div>
        
    </>
    );
}
export default AddStudentHeader;