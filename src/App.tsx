import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';
import {v4 as getId} from "uuid"

function App() {
  const [items, setItems ] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    console.log("Made it to app component")
    console.log(product)
    setItems([...items, {id: getId(), product, quantity}])
  }
  return (
    <div>
 <Greeter person="Jaclyn"/>
 <ShoppingListForm addItem={addItem} />
 <ShoppingList items={items}/>
    </div>
  );
}

export default App;
