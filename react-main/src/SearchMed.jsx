import { React, useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Table, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function SearchMed() {
    //------------------------------------More details modal-------------------------
    var [show, setShow] = useState(false);
    var handleClose = () => setShow(false);
    var handleShow = () => setShow(true);
    //--------------------------------------------------------------------------------------

    var [userObj, setUserObj] = useState({
        name: "",
        mob: "",
        address: "",
    })
    var doUpdate = (event) => {
        var { name, value } = event.target;
        setUserObj({
            ...userObj,
            [name]: value,

        });
        console.log(userObj.uid);
    };
    var [finder, fetchfinder] = useState(
        {
            cityy: "",
            medicine: ""
        }
    )


    var doUpdate = (event) => {
        var { name, value } = event.target;
        fetchfinder({
            ...finder,
            [name]: value,
        });
    };

    var [responseMsg, setResponse] = useState("*");
    var [jsonAry, fillJsonArray] = useState(["city"]);
    var [providerObj, fillProviderObj] = useState([]);
    var [mobile, setmobile] = useState("");

    async function doFetchcity() {
        // alert();
        //see all APIs-REST Services in the following folder:
        //C:\Users\Rajesh K. Bansal\Dropbox\online-mern-stack-2020\mongodb-express\roters
        var url = "/api/postmed/fetch-city";
        var response = await axios.post(url);
        fillJsonArray(response.data);
        //   alert(JSON.stringify(response.data));
        //   alert(jsonAry);
        //   console.log(response.data);
        //  console.log(jsonAry);

    }
    useEffect(() => {
        doFetchcity();
    }, []);
    var [medicineObj, fillMedicine] = useState([]);
    async function doFill(e) {
        doUpdate(e);
        var url = "/api/postmed/fetch-medicine/" + e.target.value;
        var response = await axios.post(url);
        fillMedicine(response.data);
        // alert(JSON.stringify(response.data));
    }
    async function showCard(finder) {

        var url = "/api/postmed/fetch-provider/" + finder.cityy + "/" + finder.medicine;
        var response = await axios.post(url);
        fillProviderObj(response.data);
        alert(JSON.stringify(response.data));
    }
    async function doFetchProviderDetails(obj) {
        // alert(JSON.stringify(obj));
        var url = "/api/profile/fetch-profile";
        var response = await axios.post(url, obj);
        alert(JSON.stringify(response.data));
        // var { mobile } = response.data[0];
        // alert(mobile);
        setmobile(response.data[0]);
    }
    // async function doFetchProviderDetails(obj) {
    //     var url = "/api/profile/fetch-profile";
    //     var response = await axios.post(url, obj);
    //     if (response.data.length == 0) {
    //         alert("No data found");
    //         setResponse("empty");
    //         return;
    //     }
    //     setResponse(JSON.stringify(response.data[0]));// it is the first value of the array (hence index is given)
    //     var { name, mob, address } = response.data[0];
    //     alert(mob);

    //     setUserObj({ "name": name, "mob": mob, "address": address });

    // }



    return (
        <>

            <Container className="block-example border border-dark mt-1">
                {/* noValidate validated={validated} onSubmit= {handleSubmit} */}
                <Form>
                    <Form.Text>
                        <h2><u>Medicines Finder</u></h2>
                    </Form.Text>
                    <center>

                        {/* <br></br> */}

                    </center>

                    <Form.Text className="text-muted">
                        Search medicines you need.
      </Form.Text>
                    <Form.Row>
                        <Col md={4}>
                            <Form.Group controlId="formGridState">
                                <Form.Label><b>City : </b></Form.Label>
                                <br></br><select id='template-select' value={finder.cityy} name="cityy" onChange={doFill}>
                                    <option>Select City</option>
                                    {jsonAry.map((obj) => {
                                        return (
                                            <option value={obj}>{obj}</option>
                                        )
                                    })}
                                </select>
&nbsp;&nbsp;

                        </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label><b>Medicines : </b></Form.Label>
                                <br></br>

                                <select id='template-select' value={finder.medicine} name="medicine" onChange={doUpdate} >
                                    <option>Select Medicine</option>
                                    {medicineObj.map((obj) => {
                                        return (
                                            <option value={obj}>{obj}</option>
                                        )
                                    })}
                                </select>
                                <br>
                                </br>

                            </Form.Group>
                        </Col>

                        <Col md={4}>

                            <center>
                                <Button type="button" variant="info" onClick={() => showCard(finder)} ><b>Find Medicine Providers</b></Button>
                            </center>
                        </Col>
                    </Form.Row>
                </Form>
                <br>
                </br>
                {
                    providerObj.map((obj) => {
                        return (
                            <Col md={2} style={{ float: "left" }}>
                                <Card style={{ float: "left", height: "275px", margin: "5px" }} >
                                    <Card.Body>
                                        <Card.Title>{obj.uid}</Card.Title>
                                        <Card.Text><i>

                                            <p>Medicine:{obj.medname}</p>
                                            <p>Company:{obj.comp}</p>
                                            <p>Expiry Date:{obj.expdate}</p></i>
                                        </Card.Text>

                                        <Button variant="primary" onClick={() => doFetchProviderDetails(obj)}>Show  Details</Button>

                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}




            </Container>
        </>
    )

}
export default SearchMed;
