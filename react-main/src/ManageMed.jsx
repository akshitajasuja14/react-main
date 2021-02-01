import { React, useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Table, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ManageMed() {
    var [userObj, setUserObj] = useState({
        uid: ""


    })
    var doUpdate = (event) => {
        var { name, value } = event.target;
        setUserObj({
            ...userObj,
            [name]: value,

        });
        console.log(userObj.uid);
    };

    var [responseMsg, setResponse] = useState("*");
    var [jsonAry, fillJsonArray] = useState([{ "uid": "" }]);

    async function doFetchall() {
        //see all APIs-REST Services in the following folder:
        //C:\Users\Rajesh K. Bansal\Dropbox\online-mern-stack-2020\mongodb-express\roters
        var url = "/api/postmed/manage-med";
        var response = await axios.post(url, userObj);
        fillJsonArray(response.data);
        console.log(response.data);

    }


    // async function doDelMed(_id) {
    //     alert("reached jsx");
    //     //see all APIs-REST Services in the following folder:
    //     //C:\Users\Rajesh K. Bansal\Dropbox\online-mern-stack-2020\mongodb-express\roters
    //     var url = "/api/postmed/delete-med/" + _id;
    //     var response = await axios.post(url, userObj);
    //     alert("function executed");
    //     alert(JSON.stringify(response.data));
    //     console.log(JSON.stringify(response.data));

    // }
    async function dodelete(uid, medname) {
        var url = "/api/postmed/del-med/" + uid + "/" + medname;
        var response = await axios.post(url, userObj);
        await alert(JSON.stringify(response.data));
        // fillJsonArray(response.data);
        alert(response);
    }


    return (
        <>

            <Container className="block-example border border-dark mt-1">
                {/* noValidate validated={validated} onSubmit= {handleSubmit} */}
                <Form>
                    <Form.Text>
                        <h2><u>Medicine Manager</u></h2>
                    </Form.Text>
                    <center>

                        {/* <br></br> */}

                    </center>

                    <Form.Text className="text-muted">
                        Manage medicines your way.
      </Form.Text>
                    <Form.Row>
                        <Col md={6} >
                            <Form.Group controlId="validationCustom01">
                                <Form.Label><b>Uid :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter uid" name="uid" value={userObj.uid} onChange={doUpdate} required />
                            </Form.Group>
                        </Col>


                    </Form.Row>
                    <center>
                        <Button type="button" variant="info" onClick={doFetchall} ><b>Fetch posted medicines</b></Button>
                    </center>
                </Form>
                <br>
                </br>
                <Table variant="dark">

                    <tr>
                        <th>#</th>
                        <th>Uid</th>
                        <th>id</th>
                        <th>Medicine Name</th>
                        <th>Expiry date</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            jsonAry.map((obj, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{obj.uid}</td>
                                    <td>{obj._id}</td>
                                    <td>{obj.medname}</td>
                                    <td>{obj.expdate}</td>
                                    <td><Button variant="danger" onClick={() => dodelete(obj.uid, obj.medname)}>Delist</Button></td>
                                </tr>

                            ))



                        }


                    </tbody>

                </Table>


            </Container>
        </>
    )

}
export default ManageMed;
