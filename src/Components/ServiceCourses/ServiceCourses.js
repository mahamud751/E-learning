import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import FullCourse from '../FullCourse/FullCourse';

const ServiceCourses = () => {
    const [fullCourses, setFullCourses] = useState([])
    useEffect(() => {
        fetch('courseFull.json')
            .then(res => res.json())
            .then(data => setFullCourses(data))
    }, [])
    return (
        <div>
            <div>
                <div className="w-50 mx-auto pt-5">
                    <h1>Full Details our Featured Courses</h1>
                    <p>Enroll in a Specialization to master a specific career skill. You’ll complete a series of rigorous courses, tackle hands-on projects, and earn a Specialization Certificate to share with your professional network and potential employers.</p>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4 p-4">
                        {
                            fullCourses.map(course => <FullCourse
                                key={course.name}
                                course={course}
                            ></FullCourse>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ServiceCourses;