import React, { useEffect, useState } from 'react';
import { Accordion, Row } from 'react-bootstrap';
import Members from '../Members/Members';
import './Features.css'
import img from '../../22.png'
import image from '../../21.png'


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
            </div>
        </div>
    );
};

export default Features;