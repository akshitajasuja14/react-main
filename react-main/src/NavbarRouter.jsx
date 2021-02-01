import { React, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Modal, FormControl } from 'react-bootstrap';
import HomeRouter from './Homerouter';
import Login from './Login';
import Signup from "./Signup";
function NavbarRouter() {
    var [showsignup, setShowSignup] = useState(false);
    var handleCloseSignup = () => setShowSignup(false);
    var handleShowSignup = () => setShowSignup(true);

    var [showlogin, setShowLogin] = useState(false);
    var handleCloseLogin = () => setShowLogin(false);
    var handleShowLogin = () => setShowLogin(true);

    // var logo="./pics/homeicon.png";
    return (
        <>

            <Navbar collapseOnSelect bg="dark" expand="lg">
                <Navbar.Brand style={{ color: "pink" }} href="#home"><i><b>www.website.com</b>  </i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto " >
                        <Nav.Link href="/" exact style={{ color: "white" }}><b>Home</b></Nav.Link>
                        <Nav.Link href="#" exact style={{ color: "white" }}><b>About us</b></Nav.Link>
                        <Nav.Link href="#" exact style={{ color: "white" }}><b>Contact us</b></Nav.Link>
                    </Nav>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                    <Form inline>

                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        {/* <Button variant="btn btn-success">Search</Button> */}
                        <Nav.Link style={{ color: "pink" }} variant="btn btn-success" exact onClick={handleShowSignup}><b>Signup</b></Nav.Link>
                        <Nav.Link style={{ color: "pink" }} exact onClick={handleShowLogin}><b>Login</b></Nav.Link>

                    </Form>
                    {/* <Nav className="mr-auto" >
                        
                        <Nav.Link  exact onClick={handleShowSignup}><b>Signup</b></Nav.Link>
                        <Nav.Link  exact onClick={handleShowLogin}><b>Login</b></Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            { /*--------signup modal-------------*/}
            <Modal show={showsignup} onHide={handleCloseSignup}>
                <Signup></Signup>
            </Modal>
            { /*--------Login modal------------*/}
            <Modal show={showlogin} onHide={handleCloseLogin}>
                <Login></Login>
            </Modal>


        </>

    )

}

export default NavbarRouter;
