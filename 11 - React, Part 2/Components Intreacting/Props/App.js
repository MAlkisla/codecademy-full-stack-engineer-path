import React from 'react';
import GroceryItem from './GroceryItem';

function App() {
    return (
        <div>
            <h1>Online Grocery Store</h1>
            <GroceryItem name="Eggs" />
            <GroceryItem name="Banana" />
            <GroceryItem name="Strawberry" />
            <GroceryItem name="Bread" />
        </div>
    );
}

export default App;
