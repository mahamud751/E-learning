import React from 'react';
import './Members.css'
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Members = (props) => {
    const { name, star, img, duration_start, duration_end, students } = props.member
    return (
        <div>
            <div>
                <Col className="mt-5 single-cart">
                    <Card className="m-card container">
                        <Card.Img variant="top" className="card-img img-fluid" src={img} />
                        <Card.Body>
                            <Card.Title className="text-center">{name}</Card.Title>

                            <Card.Text className="mt-3 text-center">
                                <h5><i class="fas fa-user"></i> {students}  Student Enrolled</h5>
                                <p><i class="fas fa-calendar-week"></i> {duration_start} - {duration_end} months</p>
                                <Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                                <br />
                                <button className="btn-explore"> <i class="fas fa-unlock"></i> ENROLL</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </div>
        </div>


    );
};

export default Members;