import {} from 'react-icons/fa';
import './styles/VerticalNav.css';
import { FaUserAlt, FaReceipt, FaMoneyBill } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

import { LuNewspaper } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom';
function VerticalNav(){
    return(
        <div className="vertical">
            
            <ul >
                <li><NavLink to="/pages/Signup" activeClassName="active">
                    <div className='vitem'>
                    < FaUserAlt className='pusername' size={'2em'} />
                    <p >Username</p>
                    </div>
                </NavLink>
                    
                </li>
                    <li><NavLink to="/pages/Student" activeClassName="active" >
                        <div  className='vitem ' >
                        <TfiMenuAlt size={'2em'} className='vicon'/>
                    <p  >Students</p>
                    </div>
                    </NavLink>
                        
                        </li>
                    <li>
                        <NavLink to="/pages/Receipts">
                             <div  className='vitem'>
                        <FaReceipt className='vicon' size={'2em'}/>
                    <p>Receipts</p>
                    </div>
                        </NavLink>
                       </li>
                    <li>
                        <NavLink to="/pages/Report" activeClassName="active">
                            <div  className='vitem'>
                    <LuNewspaper className='vicon' size={'2em'}/>
                    <p  >Report</p>
                    </div>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to="/pages/Payment" activeClassName="active">
                            <div  className='vitem'>
                        <FaMoneyBill className='vicon' size={'2em'}/>
                    <p >Payments</p>
                    </div>
                        </NavLink>
                        </li>
            </ul>
        </div>
    );
}
export default VerticalNav;