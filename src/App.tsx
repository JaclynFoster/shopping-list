import React from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';

function App() {
  const items = [
    {id: 1, product: "Lemon", quantity: 3},
    {id: 2, product: "Chicken", quantity: 5},
    {id: 3, product: "Chocolate", quantity: 12}
]
  return (
    <div>
 <Greeter person="Jaclyn"/>
 <ShoppingList items={items}/>
    </div>
  );
}

export default App;
