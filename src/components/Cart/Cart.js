import React from 'react';

const Cart = (props) => {
    return (
        <div>
           <h3>order summary </h3>
           <p>selected item:{props.cart.length}</p> 
        </div>
    );
};

export default Cart;