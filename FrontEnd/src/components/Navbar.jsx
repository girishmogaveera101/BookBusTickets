import { Link } from "react-router-dom";
import './css/Navbar.css';
const Navbar = () => {  
    return (
        <>
    <table id="table1">
        <tr style={{position: "static"}}>
            <td style={{width: "10%"}}>
                    <i class="fa fa-bus" id="main-para-logo"></i>
            </td>
            <td style={{width: "70%"}}>
                    <p id='main-para'>BookBusTickets</p>
            </td>
            <td style={{width:"10%"}}>
                <p id="userName">User</p>
            </td>
            <td style={{width: "4%"}}>
                <Link to="/Profile">
                    <i class="fa fa-user-circle-o" id="header-profile-logo"></i>
                </Link>
            </td>
        </tr>
    </table>
        </>
    )
}
export default Navbar;