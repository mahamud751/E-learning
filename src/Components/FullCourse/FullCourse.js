import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FullCourse = (props) => {
    const { name, instructions, price, img } = props.course
    return (
        <div>
            <div>
                <Col className="mt-5 single-cart">
                    <Card className="card container">
                        <Card.Img variant="top" className="card-img" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <h5>${price}</h5>
                            <Card.Text>
                                {instructions}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default FullCourse;