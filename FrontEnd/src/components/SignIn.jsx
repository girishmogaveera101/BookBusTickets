import React from "react";
import "./css/SignIn.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {


    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/MyDatbase', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        navigate('/Home');
    };


    return (
        <>


            <center>
                <form onSubmit={handleSubmit}>
                    <table id="loginBox">
                        <tr>
                            <td colSpan="2">
                                <p id="main">Sign-in Page</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p id="name" style={{ float: "right" }}>Name</p>
                            </td>
                            <td>
                                <input onChange={handleForm} id="inputName" style={{ float: "left" }} type="text" name="inputName" placeholder="Enter the Name" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="phoneNumber" style={{ float: "right" }}>Phone Number</p>
                            </td>
                            <td>
                                <input onChange={handleForm}  id="inputPhoneNumber" style={{ float: "left" }} type="number" name="inputPhoneNumber" placeholder="Enter the Phone Number" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="email" style={{ float: "right" }}>Email</p>
                            </td>
                            <td>
                                <input onChange={handleForm}  id="inputEmail" style={{ float: "left" }} type="email" name="inputEmail" placeholder="Enter the Email" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="newPassword" style={{ float: "right" }}>New Password</p>
                            </td>
                            <td>
                                <input onChange={handleForm}  id="inputNewPassword" style={{ float: "left" }} type="password" name="inputNewPassword" placeholder="Enter the New Password" required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                    <input id="signInSubmit" type="submit" value="sign-in" />
                               
                            </td>
                        </tr>
                    </table>
                </form>
                <p id="plainText">Already have an account?</p>
                <Link to="/">
                    <p id="back-logo">login</p>
                </Link>
            </center>
        </>
    );
};
export default SignIn;