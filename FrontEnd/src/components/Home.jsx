import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {

    const totalTrains = 10;
    var trains = [
    { "from": "Banglore-Majestic", "to": "Hubli-main bus stand", "trainNumber": "BANG2HUB123", "totalSeats": "25", "availSeats": "5" },
    { "from": "Banglore-Majestic", "to": "Manglore-adarsh store", "trainNumber": "BANG2MANG123", "totalSeats": "27", "availSeats": "4" },
    { "from": "Banglore-Majestic", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "30", "availSeats": "9" },

    { "from": "Hubli-main bus stand", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "39", "availSeats": "3" },
    { "from": "Hubli-main bus stand", "to": "Manglore-adarsh store", "trainNumber": "BANG2MANG123", "totalSeats": "28", "availSeats": "0" },
    { "from": "Hubli-main bus stand", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "35", "availSeats": "7" },

    { "from": "Manglore-adarsh store", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "29", "availSeats": "12" },
    { "from": "Manglore-adarsh store", "to": "Hubli-main bus stand", "trainNumber": "BANG2MANG123", "totalSeats": "39", "availSeats": "19" },
    { "from": "Manglore-adarsh store", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "26", "availSeats": "3" },

    { "from": "Belgavi-shastri circle", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "32", "availSeats": "5" },
    { "from": "Belgavi-shastri circle", "to": "Hubli-main bus stand", "trainNumber": "BANG2MANG123", "totalSeats": "39", "availSeats": "0" },
    { "from": "Belgavi-shastri circle", "to": "Manglore-adarsh store", "trainNumber": "BANG2BELGif123", "totalSeats": "36", "availSeats": "9" }
    ];
    const f2 = () => {
        var fromAddress = document.getElementById('from').value;
        var toAddress = document.getElementById('to').value;
        if (fromAddress == 'From' || toAddress == 'To') {
            document.getElementById('message').innerHTML = "Select the Address";
        }
        if (fromAddress == toAddress) {
            document.getElementById('message').innerHTML = "Boarding Point is same as the Exit Point";
        }
        for (var i = 0; i < totalTrains; i++) {
            var trainFrom = trains[i].from;
            var trainto = trains[i].to;
            var trainFound;
            if (trainFrom == fromAddress && trainto == toAddress)
            {
                trainFound = 1;
            }
            if (fromAddress != toAddress && fromAddress != 'From' && toAddress != 'To') {
                if (trainFound == 1) {
                    document.getElementById('message').innerHTML = "Bus Found";
                    document.getElementById("trainNumberLabel").innerHTML = "Bus Number : ";
                    document.getElementById('trainNumber').innerHTML = trains[i].trainNumber;
                    document.getElementById('totalSeatsLabel').innerHTML = 'Total Seats : ';
                    document.getElementById('totalSeats').innerHTML = trains[i].totalSeats;
                    document.getElementById('availSeatsLabel').innerHTML = 'Available Seats : ';
                    document.getElementById('availSeats').innerHTML = trains[i].availSeats;
                    break;
                }
                else {
                    document.getElementById('message').innerHTML = "Bus not found";
                }
            }
        }
        console.log("Total Trains : " + trains.length);
    };



    const table3 = {height: "30%", paddingLeft: "15%", paddingRight: "15%"};
    const p1 = {fontWeight: "lighter",fontSize: "40px",fontFamily: "Arial, Helvetica, sans-serif",marginLeft: "15%"};
    const p2 = {color: "white",fontWeight: "bold",fontFamily: "Arial, Helvetica, sans-serif" };
    const td_table3 = {width: "30%",textAlign:"right"};



    return (

        <>
    <Navbar></Navbar>

    <table id="table2">
        <tr>
            <td>
                <p id="heading1">India's No. 1 Online Bus Ticket Booking Site</p>
            </td>
        </tr>
    </table>



   


    <center>
        <table id="table3">
            <tr style={table3}>

                <td style={td_table3}>
                    <select id="from" required>
                        <option value="from">From</option>
                        <option>Banglore-Majestic</option>
                        <option>Hubli-main bus stand</option>
                        <option>Manglore-adarsh store</option>
                        <option>Belgavi-shastri circle</option>
                    </select>
                </td>
                <td style={{width: "20%"}}>
                    <select id="to" required>
                        <option>To</option>
                        <option>Banglore-Majestic</option>
                        <option>Hubli-main bus stand</option>
                        <option>Manglore-adarsh store</option>
                        <option>Belgavi-shastri circle</option>
                    </select>
                </td>
                <td style={{width: "5%"}}>
                    <input type="date" id="date" name="date"/>
                </td>
                <td style={{width: "35%"}}>
                    <button onClick={f2} id="search-bus" name="search-bus">
                        <i class="fa fa-search fa-shake"></i>search
                    </button>
                </td>
            </tr>


            <tr style={{height: "55%"}}>
                <td colSpan="4">
                    <center>
                        <table id="message-container">
                            <tr>
                                <td colSpan="2">
                                    <p id="message">Select the Boarding and Destination Points</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="trainNumberLabel"></p>
                                </td>
                                <td>
                                    <p id="trainNumber"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="totalSeatsLabel"></p>
                                </td>
                                <td>
                                    <p id="totalSeats"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="availSeatsLabel"></p>
                                </td>
                                <td>
                                    <p id="availSeats"></p>
                                </td>
                            </tr>
                        </table>
                    </center>
                </td>
            </tr>

            <tr style={{height: "15%"}}>
                <td colSpan="4">
                    <center>
                        <Link to="/BookTickets">
                            <button id="book-ticket">Book Tickets</button>
                        </Link>
                    </center>
                </td>
            </tr>
        </table>
    </center>

    <table id="table4">
                <tr style={{ height: "20%" }}>
                    <td>
                        <p id="heading3">350+ Private Bus Operators</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="view-all-bus">view all</button>
                    </td>
                </tr>
                <tr style={{ height: "30%" }}>
                    <td>
                        <center>
                            <table id="bus-table">
                                <tr>
                                    <td>
                                        <p id="bus-company">Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Evacay Bus</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Kallada Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">KPN Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Orange Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Parveen Travels</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="bus-company">Rajdhani Express</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">VRL Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Chartered Speed Bus</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Bengal Tiger</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">SRM Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Infant Jesus</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="bus-company">Patel Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">JBT Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Shatabdi Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Eagle Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Kanker Roadways</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Komitla</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p id="bus-company">Sri Krishna Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Humsafar Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Mahasagar Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Raj Express</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Sharma Travels</p>
                                    </td>
                                    <td>
                                        <p id="bus-company">Shrinath Travels</p>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </td>
                </tr>
            </table>

            <p style={p1}>
                TRENDING OFFERS</p>
            <center>
             <div class="cards">
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(255, 0, 0),rgb(90, 0, 0))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(255, 0, 174),rgb(103, 0, 101))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(238, 255, 0),rgb(87, 90, 0))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(0, 255, 72),rgb(0, 103, 26))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(0, 242, 255),rgb(0, 77, 90))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(51, 0, 255),rgb(14, 0, 103))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(106, 106, 106),rgb(55, 55, 55))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
                    <div style={{ backgroundImage: "linear-gradient(to left, rgb(255, 0, 174),rgb(103, 0, 101))" }}>
                        <p style={p2}>Save up to Rs 250
                            on bus tickets</p>
                    </div>
            </div>
            </center>

            <Footer></Footer>
        </>
    )
}
export default Home;