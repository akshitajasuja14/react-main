import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Navbar, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function UserDashboard() {
  function openProfile() {
    window.location.href = "./User-Profile";
  }
  function openPostMed() {
    window.location.href = "./Post-Medicine";
  }
  function openManageMed() {
    window.location.href = "./Manage-Medicine";
  }
  function openSearchMed() {
    window.location.href = "./Search-Medicine";
  }

  return (

    <>
      <Navbar collapseOnSelect bg="warning" expand="lg">
        <Navbar.Brand href="#home"><b class="text-secondary"><h4>User Dashboard</h4></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" > </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">uid</a>
          </Navbar.Text>
          <Nav.Link href="/" exact style={{ color: "black" }} variant="btn btn-success" ><b>Logout</b></Nav.Link>

          <Form inline>


          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <center className="text-mute"><b><h4>User Dashboard</h4></b></center> */}
      <br></br>
      <Container>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Body>
                <center>
                  <img className="rounded mb-0" alt="Selected picture preview" src="pics/user icon 2.png" style={{ width: "50%", height: "40%" }} />
                </center>

                <Card.Title><b>Profile</b></Card.Title>
                <Card.Text>
                  <h6>Add/Edit profile</h6>
                </Card.Text>
                <center>
                  <Button variant="warning" onClick={openProfile}>Add/Edit profile</Button>
                </center>

              </Card.Body>
            </Card>
          </Col>
          {/* -------------------------requirement card----------------------- */}
          <Col md={3}>
            <Card>
              <Card.Body>
                <center>
                  <img className="rounded mb-0" alt="Selected picture preview" src="pics/med1.jpg" style={{ width: "70%", height: "80%" }} />
                </center>
                <br></br>
                <Card.Title><b>Post medicine</b></Card.Title>
                <Card.Text>

                  <h6>Add medicines for donations</h6>
                </Card.Text>
                <center>
                  <Button onClick={openPostMed} variant="warning">Add medicines</Button>
                </center>

              </Card.Body>
            </Card>
          </Col>
          {/* --------------------------------MEDICINE MANAGER-------------------------------------------------- */}
          <Col md={3}>
            <Card>
              <Card.Body>
                <center>
                  <img className="rounded mb-0" alt="Selected picture preview" src="pics/med4.jpg" style={{ width: "70%", height: "80%" }} />
                </center>
                <br></br>
                <Card.Title><b>Medicine Manager</b></Card.Title>
                <Card.Text>

                  <h6>Manage posted medicines.</h6>
                </Card.Text>
                <center>
                  <Button onClick={openManageMed} variant="warning">Manage</Button>
                </center>

              </Card.Body>
            </Card>
          </Col>
          {/* --------------------------------MEDICINE Search-------------------------------------------------- */}
          <Col md={3}>
            <Card>
              <Card.Body>
                <center>
                  <img className="rounded mb-0" alt="Selected picture preview" src="pics/med3.jpg" style={{ width: "62%", height: "75%" }} />
                </center>
                <br></br>
                <Card.Title><b>Medicine Search</b></Card.Title>
                <Card.Text>

                  <h6>Search posted medicines.</h6>
                </Card.Text>
                <center>
                  <Button onClick={openSearchMed} variant="warning">Search Medicine</Button>
                </center>

              </Card.Body>
            </Card>
          </Col>


        </Row>

      </Container>


    </>
  );
}
export default UserDashboard;