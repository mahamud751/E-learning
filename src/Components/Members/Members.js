import React from 'react';
import './Members.css'
import { Card, Col } from 'react-bootstrap';

const Members = (props) => {
    const { name, img, duration_start, duration_end, students } = props.member
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
                                <button className="btn-explore"> <i class="fas fa-unlock"></i> ENROLL</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div >
    );
};

export default Members;