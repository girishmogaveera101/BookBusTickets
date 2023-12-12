import './css/footer.css';
import React from 'react';

function Footer(){


    const footerTd = {width: "5%",color: "white"};
    const td1 = {fontSize: "12px",textAlign: "left",fontWeight: "lighter",letterSpacing: "1px"};
    const td2 = {color: "white",marginLeft:"20%",fontFamily: "Arial, Helvetica, sans-serif",fontWeight: "bold"};


    return(
        <>
        
        <div id="div-footer">
            <table id="footer">
                <tr style={{height: "10%"}}>
                    <th>
                        <p id="footer-p1">Top RTCs</p>
                    </th>
                    <th>
                        <p id="footer-p1">Other</p>
                    </th>
                    <th>
                        <p id="footer-p1">Top bus routes</p>
                    </th>
                    <th>
                        <p id="footer-p1">Top cities</p>
                    </th>
                    <th>
                        <p id="footer-p1">redRail</p>
                    </th>
                </tr>
                <tr style={{height: "10%"}}>
                    <td>
                        <p id="footer-p1">APSRTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">TSRTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">Hyderabad to Bangalore Bus</p>
                    </td>
                    <td>
                        <p id="footer-p1">Hyderabad Bus Tickets</p>
                    </td>
                    <td>
                        <p id="footer-p1">Book Train Tickets</p>
                    </td>
                </tr>
                <tr style={{height: "10%"}}>
                    <td>
                        <p id="footer-p1">GSRTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">SBSTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">Bangalore to Chennai Bus</p>
                    </td>
                    <td>
                        <p id="footer-p1">Bangalore Bus Tickets</p>
                    </td>
                    <td>
                        <p id="footer-p1">PNR Status</p>
                    </td>
                </tr>
                <tr style={{height: "10%"}}>
                    <td>
                        <p id="footer-p1">MSRTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">RSRTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">Pune to Bangalore Bus</p>
                    </td>
                    <td>
                        <p id="footer-p1">Chennai Bus Tickets</p>
                    </td>
                    <td>
                        <p id="footer-p1">Live Train Status</p>
                    </td>
                </tr>
                <tr style={{height: "10%"}}>
                    <td>
                        <p id="footer-p1">TNSTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">Kerala RTC</p>
                    </td>
                    <td>
                        <p id="footer-p1">Mumbai to Bangalore Bus</p>
                    </td>
                    <td>
                        <p id="footer-p1">Pune Bus Tickets</p>
                    </td>
                    <td>
                        <p id="footer-p1">Train Seat Availability</p>
                    </td>
                </tr>
                <tr style={{height: "10%"}}>
                </tr>
            </table>


            <table id="footer2">
                <tr style={{height: "20%"}}>
                    <td colSpan="2" rowSpan="5" style={{width: "30%"}}>
                        <p style={td1}
                            id="footer-p1">
                            <span style={{fontSize: "130px"}} class="material-icons">directions_bus</span>
                            <br/>
                            BookBusTickets is the world's largest
                            online bus ticket booking service trusted by over 25 million happy customers globally.
                            redBus
                            offers bus ticket booking through its website, iOS and Android mobile apps for all major
                            routes.BookBusTickets is the world's largest
                            online bus ticket booking service trusted by over 25 million happy customers globally.
                        </p>
                    </td>
                    <th>
                        <p id="footer-p1">About BookBusTickets</p>
                    </th>
                    <th>
                        <p id="footer-p1">Info</p>
                    </th>
                    <th>
                        <p id="footer-p1">Global Sites</p>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p id="footer-p1">About us</p>
                    </td>
                    <td>
                        <p id="footer-p1">T&C</p>
                    </td>
                    <td>
                        <p id="footer-p1">India</p>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p id="footer-p1">Investor Relations</p>
                    </td>
                    <td>
                        <p id="footer-p1">Privacy policy</p>
                    </td>
                    <td>
                        <p id="footer-p1">Singapore</p>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p id="footer-p1">Contact us</p>
                    </td>
                    <td>
                        <p id="footer-p1">FAQ</p>
                    </td>
                    <td>
                        <p id="footer-p1">Malaysia</p>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p id="footer-p1">Mobile version</p>
                    </td>
                    <td>
                        <p id="footer-p1">Blog</p>
                    </td>
                    <td>
                        <p id="footer-p1">Indonesia</p>
                    </td>

                </tr>
            </table>

            <table id="last-footer">
                <tr>
                    <td style={{width: "70%"}}>
                        <p
                            style={td2}>
                            &#169; 2023 BookBusTickets&#8482; India Pvt Ltd. All rights reserved</p>
                    </td>
                    <td style={footerTd}>
                        <i class="fa fa-envelope" style={{fontSize:"30px"}}></i>
                    </td>
                    <td style={footerTd}>
                        <i class="fa fa-twitter" style={{fontSize:"30px"}}></i>
                    </td>
                    <td style={footerTd}>
                        <i class="fa fa-instagram" style={{fontSize:"30px"}}></i>
                    </td>
                    <td style={footerTd}>
                        <i class="fa fa-facebook" style={{fontSize:"30px"}}></i>
                    </td>
                    <td style={footerTd}>
                        <i class="fa fa-linkedin" style={{fontSize:"30px"}}></i>
                    </td>
                </tr>
            </table>
        </div>
        </>
    );
};
export default Footer;