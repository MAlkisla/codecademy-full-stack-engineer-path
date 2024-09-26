import React from 'react';

function GroceryItem(props) {
    return (
        <button onClick={() => alert(`${props.name} added to cart`)}>
            {props.name}
        </button>
    );
}

export default GroceryItem;
