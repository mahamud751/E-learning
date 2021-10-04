import React from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="home">
            <div className="w-50 mx-auto pt-5">
                <h1>Our Featured Courses</h1>
                <p>Enroll in a Specialization to master a specific career skill. You’ll complete a series of rigorous courses, tackle hands-on projects, and earn a Specialization Certificate to share with your professional network and potential employers.</p>
            </div>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Course
                            course={course}
                        ></Course>)
                    }
                </Row>
                <Link to="./courses">
                    <button className="btn-explore">Explore More Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;