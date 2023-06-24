import {} from 'react-icons/fa';
import './styles/VerticalNav.css';
import { FaUserAlt, FaReceipt, FaMoneyBill } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

import { LuNewspaper } from "react-icons/lu";
import { Link } from 'react-router-dom';
function VerticalNav(){
    return(
        <div className="vertical">
            <ul >
                <li><div className='vitem'>
                    < FaUserAlt className='pusername' size={'2em'} />
                    <a href="#">Username</a>
                    </div></li>
                    <li><div  className='vitem active' >
                        <TfiMenuAlt size={'2em'} className='vicon'/>
                    <Link  to='students'>Students</Link>
                    </div></li>
                    <li><div  className='vitem'>
                        <FaReceipt className='vicon' size={'2em'}/>
                    <a href="#">Receipts</a>
                    </div></li>
                    <li><div  className='vitem'>
                    <LuNewspaper className='vicon' size={'2em'}/>
                    <a href="#">Report</a>
                    </div></li>
                    <li><div  className='vitem'>
                        <FaMoneyBill className='vicon' size={'2em'}/>
                    <a href="#">Payments</a>
                    </div></li>
            </ul>
        </div>
    );
}
export default VerticalNav;