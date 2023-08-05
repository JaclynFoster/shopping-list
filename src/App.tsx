import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
  const [items, setItems ] = useState<Item[]>([])
  const addItem = (product: string) => {
    console.log("Made it to app component")
    console.log(product)
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
