import React from "react";
import "./css/Profile.css";
import UserProfileLogo from "./images/UserProfile.png";
import WavePatten from "./images/WavePattern.png";
import { Link } from "react-router-dom";

const Profile = () => {
    return(
        <>
            <table id="profileBox">
                <tr>
                    <td colSpan="4">
                        <p id="mainHeading">Profile</p>
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Username</p>
                    </td>
                    <td>
                        <p id="label">NA</p>
                    </td>
                    <td style={{width:"50%"}} colSpan="2" rowSpan="4">
                        <img id="userProfileLogo" src={UserProfileLogo}/>
                    </td>
                </tr>
                    <tr>
                    <td>
                        <p id="label">Name</p>
                    </td>
                    <td>
                        <p id="label">User</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Phone</p>
                    </td>
                    <td>
                        <p id="label">9999999999</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Email</p>
                    </td>
                    <td>
                        <p id="label">user@gmail.com</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Age</p>
                    </td>
                    <td>
                        <p id="label">NA</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Gender</p>
                    </td>
                    <td>
                        <p id="label">NA</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="label">Address</p>
                    </td>
                    <td>
                        <p id="label">NA</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/">
                            <button id="logout">Logout</button>
                        </Link>
                    </td>
                    <td>
                        <button id="editProfile">Edit Profile</button>
                    </td>
                </tr>
            </table>
            <img id="wavePattern" src={WavePatten}/>
            <Link to="/Home">
                <i className="fa fa-chevron-left" id="backIcon"></i>
            </Link>
        </>
    );
};
export default Profile;