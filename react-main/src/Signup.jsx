import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Signup() {
    var [userObj, setUserObj] = useState({
        uid: "",
        pwd: "",
        mob: ""

    });

    var [errObj, setErrors] = useState({
        uid: "*",
        pwd: "*",
        mob: "*"
    });

    var doUpdate = (e) => {
        var { name, value } = e.target;
        setUserObj({
            ...userObj, [name]: value
        })
    }
    async function doSignup() {
        var url = "/api/react/signup";
        var response = await axios.post(url, userObj);
        alert(JSON.stringify(response.data));
    }
    //''''''''''''''''''''''''''''''''''''''''''''
    var [show, setShow] = useState(false);
    var handleClose = () => setShow(false);
    var handleShow = () => setShow(true);
    //-------------------------------------------Validation-----------------------
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
        if (userObj.mob.length == 0)
            errObj.mob = <h6 style={{ color: "red" }}>Fill Mobile</h6>;
        else {
            errObj.mob = <h6 style={{ color: "green" }}>Great</h6>;
            b = false;
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
    //-----------------------------------------------------------------------------------------------
    return (
        <>

            <Button variant="dark" style={{ margin: "5px" }} onClick={handleShow}>Signup </Button>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>Signup Here</b>

                    </Modal.Title>
                </Modal.Header>
                <Form.Text className="text-muted"><center>
                    We'll never share your data with anyone else.
                </center>
                </Form.Text>
                <Form>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><b>User Id</b><b style={{ color: "red" }}>*</b> : </Form.Label>
                            <Form.Control type="text" required="required" placeholder="Enter uid" name="uid" onClick={err} value={userObj.uid} onChange={doUpdate} />

                            {errObj.uid}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><b>Password</b><b style={{ color: "red" }}>*</b> : </Form.Label>
                            <Form.Control type="password"
                                required="required"
                                placeholder="Password"
                                onClick={err} name="pwd"
                                value={userObj.pwd}
                                onChange={doUpdate}
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
  </Form.Text>
                            {errObj.pwd}
                        </Form.Group>
                        <Form.Group controlId="formBasicmobile">
                            <Form.Label><b>Mobile</b><b style={{ color: "red" }}>*</b> : </Form.Label>
                            <Form.Control type="text" required="required" placeholder="Mobile" onClick={err} name="mob" value={userObj.mob} onChange={doUpdate} />

                            {errObj.mob}
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="button" onClick={() => { doSignup(); err(); }} > Signup </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
export default Signup;