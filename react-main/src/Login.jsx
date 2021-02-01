import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Login() {
    var [userObj, setUserObj] = useState({
        uid: "",
        pwd: "",
        resp: ""


    });
    //validation
    var [errObj, setErrors] = useState({
        uid: "*",
        pwd: "*"
    });

    var doUpdate = (e) => {
        var { name, value } = e.target;
        setUserObj({
            ...userObj, [name]: value
        })
    }
    async function doLogin() {
        var url = "/api/react/login";
        var response = await axios.post(url, userObj);
        alert(JSON.stringify(response.data));
        window.location.href = "/User-Dashboard";
    }


    //''''''''''''''''''''''''''''''''''''''''''''
    var [show, setShow] = useState(false);
    var handleClose = () => setShow(false);
    var handleShow = () => setShow(true);
    var err = () => {
        var b = true;
        if (userObj.uid.length == 0)
            errObj.uid = <h6 style={{ color: "red" }}>Fill Uid</h6>;
        else {
            errObj.uid = <h6 style={{ color: "green" }}>Great</h6>;
            b = false;
        }

        if (userObj.pwd.length == 0)
            errObj.pwd = <h6 style={{ color: "red" }}>Fill Password</h6>;
        else {

            b = false;
            errObj.pwd = <h6 style={{ color: "green" }}>Great</h6>;
        }

        setErrors(errObj);
        if (b == false) {
            setUserObj({
                ...userObj,
                ["resp"]: "",
            });
            b = true;
        }

    };




    return (
        <>

            <Button variant="dark" style={{ margin: "5px" }} onClick={handleShow}> Login </Button>


            <Modal variant="light" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>Login Here</b>

                    </Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>User Id </b><b style={{ color: "red" }}>*</b> :</Form.Label>
                            <Form.Control type="text" required placeholder="Enter uid" name="uid" onClick={err} value={userObj.uid} onChange={doUpdate} />
                            {errObj.uid}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><b>Password</b> <b style={{ color: "red" }}>*</b> :</Form.Label>
                            <Form.Control type="password" required placeholder="Password" onClick={err} name="pwd" value={userObj.pwd} onChange={doUpdate} />
                            {errObj.pwd}
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>

                        {userObj.resp}
                        <Button variant="primary" type="button" onClick={() => { doLogin(); err(); }} > Login </Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
export default Login;