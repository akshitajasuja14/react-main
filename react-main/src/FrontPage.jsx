import { React } from 'react';
import { Carousel, Jumbotron, Container, Card } from 'react-bootstrap';
import NavbarRouter from './NavbarRouter';
function FrontPage() {
    var logo = "./Pics/bg1";
    return (
        <>
            
                <NavbarRouter></NavbarRouter>
                <Card className=" text-dark">
                    <Card.Img src="./Pics/donate3.jpg" varriant="left" alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title className=" text-black"><h1><i style={{ color: "" }}>Donate for a better world..</i></h1></Card.Title>
                        <Card.Text
                            className="text-white">
                               Giving is the greatest act of grace.
               

                        </Card.Text>

                    </Card.ImgOverlay>
                    {/* <Card.Footer>
                        <small className="text-muted">*******************************</small>
                    </Card.Footer> */}
                </Card>
<center>
                <h1>----------------------------------------------</h1>
                <h4 className="text-muted">Our services</h4>
                <h1>----------------------------------------------</h1>
</center>
                
                <Jumbotron fluid>
                    <Container>
                        <h1>Donate medicines </h1>
                        {/* <img
                            className="d-block h-30 w-100"
                            src="pics/medlogo2.png"
                            alt="First slide"
                        /> */}
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
    </p>
                    </Container>
                </Jumbotron>
                {/* <Carousel>
                    <Carousel.Item >
                        <img
                            className="d-block h-50 w-100"
                            src="pics/c1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pics/c1.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pics/c1.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                {/* <Jumbotron fluid>
                    <Container>
                        <h1>Donate medicines </h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
    </p>
                    </Container>
                </Jumbotron> */}
           
        </>
    );
}
export default FrontPage;