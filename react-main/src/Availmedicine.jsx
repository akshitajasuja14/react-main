import { React, useState } from "react";
import { Container, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Availmedicine() {
    var [userObj, setUserObj] = useState({
        uid: "",
        medname: "",
        comp: "",
        expdate: "",
        qty: "",
        city: "",
        units: "",
        medpic: ""


    })
    var doUpdate = (event) => {
        var { name, value } = event.target;
        setUserObj({
            ...userObj,
            [name]: value,

        });
        console.log(userObj);
    };
    var [fileObj, setFileObj] = useState('Pics/uploadIcon.jpg');

    function Updatepic(event) {
        setUserObj({ ...userObj, ["medpic"]: event.target.files[0] });
        setFileObj(URL.createObjectURL(event.target.files[0]));


    }
    //    async function fetchCity(){


    //     }
    //     useEffect(() => {

    //     }, []);
    var [responseMsg, setResponse] = useState("*");

    async function doAddMed() {
        //see all APIs-REST Services in the following folder:
        //C:\Users\Rajesh K. Bansal\Dropbox\online-mern-stack-2020\mongodb-express\roters
        var url = "/api/postmed/post-med";

        var formData = new FormData();
        for (var x in userObj) {
            formData.append(x, userObj[x]);
        }
        var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

        alert(JSON.stringify(response.data));
        setResponse(response.msg);

    }
    // async function doFetch() {
    //     var url = "/api/profile/fetch-profile";
    //     var response = await axios.post(url, userObj);
    //     if (response.data.length == 0) {
    //         alert("No data found");
    //         setResponse("empty");
    //         return;
    //     }
    //     setResponse(JSON.stringify(response.data[0]));// it is the first value of the array (hence index is given)
    //     var { uid, name, mob, idpic, address, city } = response.data[0];
    //     alert(uid);

    //     setUserObj({ "uid": uid, "name": name, "mob": mob, "address": address, "city": city, "idpic": idpic });

    // }
    // var [validated, setValidated] = useState(false);
    // var handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
    //   else{
    //     var Submit = (event) => {
    //     // doAdd();
    //     event.preventDefault();
    //     event.stopPropagation();
    //     }
    //     Submit();
    //   }
    //   // alert();

    //   setValidated(true);
    // };
    return (
        <>

            <Container className="block-example border border-dark mt-1">
                {/* noValidate validated={validated} onSubmit= {handleSubmit} */}
                <Form>
                    <Form.Text>
                        <h2><u>Medicines to Donate</u></h2>
                    </Form.Text>
                    <center>

                        {/* <br></br> */}

                    </center>

                    <Form.Text className="text-muted">
                        Donate medicines save lives.
      </Form.Text>
                    <Form.Row>
                        <Col md={4} >
                            <Form.Group controlId="validationCustom01">
                                <Form.Label><b>Uid :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter uid" name="uid" value={userObj.uid} onChange={doUpdate} required />
                            </Form.Group>
                        </Col>
                        <Col md={4} >
                            <Form.Group controlId="validationCustom01">
                                <Form.Label><b>Medicine Name :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="medname" value={userObj.medname} onChange={doUpdate} required />
                                {/* <Form.Control.Feedback type="invalid">
              Please choose a userid.
            </Form.Control.Feedback> */}
                                {/* <Form.Control.Feedback type="valid" style={{ color: "green" }}>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                        </Col>


                        <Col md={4} >
                            <Form.Group controlId="validationCustom02">
                                <Form.Label><b>Company :</b> </Form.Label>
                                <Form.Control type="text" placeholder="Enter company" name="comp" value={userObj.comp} onChange={doUpdate} required />
                                {/* <Form.Control.Feedback style={{ color: "green" }}>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>

                        </Col>
                    </Form.Row>
                    <Form.Row>

                        <Col md={5}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><b>Expiry Date : </b></Form.Label>
                                <Form.Control type="date" name="expdate" value={userObj.expdate} onChange={doUpdate} />
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><b>City : </b></Form.Label>
                                <Form.Control type="text" placeholder="Enter City" name="city" value={userObj.city} onChange={doUpdate} />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label><b>Quantity : </b></Form.Label>
                                <Form.Control type="number" name="qty" value={userObj.qty} onChange={doUpdate} />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><b>Units(Tabs/Strips/Bottles/Injections) : </b></Form.Label>
                        <Form.Control type="text" placeholder="Enter units" name="units" value={userObj.units} onChange={doUpdate} />
                    </Form.Group>

                    <Form.Group >
                        <center>
                            <Form.Row>
                                <Col md={6} >
                                    <Form.Label className="mr-10"><b>Upload picture of medicine : </b></Form.Label>
                                </Col>
                                <Col >
                                    <Form.File type="file" name="medpic" onChange={Updatepic} />
                                </Col>

                                <Col md={6}>
                                    <img className="rounded mb-0" alt="Selected picture preview" src={fileObj} style={{ width: "160px", height: "150px" }} />
                                </Col>


                            </Form.Row>
                        </center>


                    </Form.Group>
                    {/* <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group> */}

                    {/* buttons */}

                    <center>
                        <Button type="button" variant="success" onClick={doAddMed} ><b>Post medicine</b></Button>
                    </center>
                </Form>
                <br>
                </br>


            </Container>
        </>
    )

}
export default Availmedicine;
