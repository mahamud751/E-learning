import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FullCourse = (props) => {
    const { name, instructions, price, img, timeHour, timeMin } = props.course
    return (
        <div>
            <div>
                <Col className="mt-5 single-cart">
                    <Card className="card container">
                        <Card.Img variant="top" className="card-img img-fluid" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <h5>Price: ${price}</h5>
                            <Card.Text>
                                {instructions}
                            </Card.Text>
                            <small className="text-dark"><i className="fas fa-clock"></i>  {timeHour} hr {timeMin} min </small>
                            <br />
                            <button className="btn-explore mt-2"> <i className="fas fa-unlock"></i>  ENROLL</button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default FullCourse;