import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
  const [items, setItems ] = useState<Item[]>([])
  return (
    <div>
 <Greeter person="Jaclyn"/>
 <ShoppingListForm />
 <ShoppingList items={items}/>
    </div>
  );
}

export default App;
