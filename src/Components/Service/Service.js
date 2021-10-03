import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import FullCourse from '../FullCourse/FullCourse';

const Service = () => {
    const [fullCourses, setFullCourses] = useState([])
    useEffect(() => {
        fetch('courseFull.json')
            .then(res => res.json())
            .then(data => setFullCourses(data))
    }, [])
    return (
        <div>
            <div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            fullCourses.map(course => <FullCourse
                                course={course}
                            ></FullCourse>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Service;