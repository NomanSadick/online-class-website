import React, { useState, useEffect } from 'react';
import { fakeData } from '../../data/fakeData';
import CourseDetail from '../CourseDetail/CourseDetail';
import './Course.css';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course, setCourse ] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart)
        console.log('clicked', course)
    }
    useEffect(()=>{
        setCourse(fakeData)
    },[])
    

    console.log(fakeData)
    return (
        <div className="course-container">
           <div className="course-information">
           {
                course.map(course =><CourseDetail 
                    handleAddCourse={handleAddCourse}
                    course={course}></CourseDetail>)
            }
           </div>
           <div className="cart-container"> 
               <Cart cart= {cart}></Cart>
           </div>
        </div>
    );
};

export default Course;