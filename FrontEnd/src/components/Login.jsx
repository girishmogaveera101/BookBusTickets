import React from "react";
import "./css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {


    const w1 = () => {
        alert("User not Found");
    };


    return (
        <>

            <center>
                <form>
                    <table id="loginBox">
                        <tr>
                            <td colSpan="2">
                                <p id="main">Login Page</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p id="username" style={{ float: "right" }}>username</p>
                            </td>
                            <td>
                                <input id="inputUsername" style={{ float: "left" }} type="text" name="username" placeholder="Enter the username" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="password" style={{ float: "right" }}>password</p>
                            </td>
                            <td>
                                <input id="inputPassword" style={{ float: "left" }} type="password" name="password" placeholder="Enter the password" required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input onClick={w1} id="loginSubmit" type="submit" value="login" />
                            </td>
                        </tr>

                    </table>
                </form>
                <p id="plainText">Don't have an account?</p>
                <Link to="/SignIn">
                    <p id="back-logo">sign-in</p>
                </Link>
            </center>
        </>
    )
}
export default Login;