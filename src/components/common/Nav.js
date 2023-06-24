import './styles/Nav.css';
import { Link } from 'react-router-dom';
function Nav(){
    return(
    <nav >
        <div className="navComponents">
            <Link className='navLinks' to={"./pages/Student"}>Students</Link>
            <Link className='navLinks' to={"./pages/Receipts"}>Receipts</Link>
            <Link className='navLinks' to={"./pages/Report"}>Report</Link>
            <Link className='navLinks'>Export</Link>
            <span className='rightnav'>
                    <div className='selectyr'>
                        <select name="yr" id="yr" >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
                    </div>
            </span>
        </div>
       
        
       
    </nav>
    );
}
export default Nav;