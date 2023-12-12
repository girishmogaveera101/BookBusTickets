import React from "react";
import Navbar from "./Navbar";
import "./css/BookTickets.css";
import { useNavigate } from 'react-router-dom';

const BookTickets = () => {

    const f1 = () => {
        document.getElementById('p1').innerHTML="changed";
    };

    const navigate = useNavigate();

    const s2 = () => {
        alert("Ticket Successfully Booked. Details will be sent to your Phone Number.");
        navigate("/Home");
    }

    return(
        <>
            <center>
                <form>
                    <table id="loginBox">
                        <tr>
                            <td colSpan="2">
                                <p id="main">Book your Tickets</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p id="username" style={{ float: "right" }}>Passenger Name</p>
                            </td>
                            <td>
                                <input id="inputUsername" style={{ float: "left" }} type="text" name="username" placeholder="Enter the Name" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="password" style={{ float: "right" }}>Age</p>
                            </td>
                            <td>
                                <input id="inputPassword" style={{ float: "left" }} type="number" name="password" placeholder="Enter the age" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="password" style={{ float: "right" }}>Boarding Addres</p>
                            </td>
                            <td>
                                <input id="inputPassword" style={{ float: "left" }} type="text" name="password" placeholder="Enter the address" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="password" style={{ float: "right" }}>Droping Point</p>
                            </td>
                            <td>
                                <input id="inputPassword" style={{ float: "left" }} type="text" name="password" placeholder="Enter the Drop Point" required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input onClick={s2} id="loginSubmit" type="submit" value="Book Ticket" />
                            </td>
                        </tr>

                    </table>
                </form>
            </center>
        </>
    );
};
export default BookTickets;