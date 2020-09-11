import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, course) =>total + course.price, 0);

    return (
        <div>
            <h2>Couser Summary</h2>
            <p>Course Order: {cart.length}</p>
            <h4>Total Price:$ {total}</h4>
        </div>
    );
};

export default Cart;