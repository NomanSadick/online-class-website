import React from 'react';
import './CourseDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const CourseDetail = (props) => {
    const {no, name, price} = props.course;
    return (
        <div className="course-detail">
            <h2>Course No: {no}</h2>
            <h4 className="course-name">Course Name: {name}</h4>
            <br/>
            <p><small>Price:$ {price}</small></p>
            <br/>
            <button
            onClick={()=>props.handleAddCourse(props.course)}
            className="main-button"><FontAwesomeIcon icon={ faShoppingCart }/>Enroll Now</button>
        </div>
    );
};

export default CourseDetail;