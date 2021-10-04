import React, { useEffect, useState } from 'react';
import { Accordion, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Members from '../Members/Members';
import './Features.css'
import img from '../../22.png'
import image from '../../21.png'
import Rating from 'react-rating';


const Features = () => {
    const [membersId, setMembersId] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembersId(data))
    }, [])
    return (
        <div>
            <div className="mt-5">
                <h1>Team Members</h1>
                <img src={image} alt="" />
                <div>
                    <Row xs={1} md={4} className="g-4 p-4">
                        {
                            membersId.map(member => <Members
                                member={member}
                            ></Members>)
                        }
                    </Row>
                </div>


                <div className="mt-5 p-5">
                    <h1 className="bg-dark text-white p-3"> Do You Have Questions ?
                        We'll help you to grow your career and growth.</h1>
                    <div className="faq p-5">
                        <div>
                            <div className="faqText mt-5">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How To Register & Enrolled On Step By Step?</Accordion.Header>
                                        <Accordion.Body>
                                            I am glad that I took this course. There was always something to learn in every lesson. The Jupyter notebooks provided are very helpful. The two milestone projects and the final capstone project helped me gain a lot of confidence. Moreover, there were short challenges, assignments, and quizzes which also helped a lot.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What are some careers in here?</Accordion.Header>
                                        <Accordion.Body>
                                            There are many roles available within the graphic design field, and they all differ in skills, experience, and interests. If you have little or no experience, you could start your career with either a graphic design internship or a junior graphic designer position. Once you have gained more experience in the profession, you can seek senior-level roles, such as senior graphic designer, senior manager of graphic design, art director, or creative director
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Can freelance graphic designers earn more?</Accordion.Header>
                                        <Accordion.Body>
                                            The short answer is yes. It depends on your experience and average client size, too. If you can book a full-time client load you can easily exceed the average salary for a junior graphic designer.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>

                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="about-details">
                    <Card style={{ width: '36rem' }}>
                        <Card.Header className="text-center">Some Student Review</Card.Header>
                        <ListGroup variant="flush">

                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="" />
                                </div>
                                This class was excellent--where have you been all my life? The instructor was incredibly knowledgeable and articulate.Thank you.
                                <Rating
                                    initialRating={4}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1610476650745-58700c3defa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                                </div>
                                F"I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material.I will be looking into taking more of these classes through omy in the near future. Thank you!"
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                            <br />
                            <ListGroup.Item>
                                <div>
                                    <img className="sImg" src="https://images.unsplash.com/photo-1614273867161-22da2cd8ab39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                </div>
                                I never took a remote training before but I will highly recommend this type of training. It felt relaxed and at a nice pace that I feel I came away with lots to use at my workplace. Thank you!"
                                <Rating
                                    initialRating={5}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star icon"
                                    readonly
                                ></Rating>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>


        </div>
    );
};

export default Features;