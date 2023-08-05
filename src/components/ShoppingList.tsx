import React from 'react'
import Item from '../models/item'

interface ShoppingListProps {
  items: Item[];
}

function ShoppingList(props: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Here is your shopping list:</h1>
      <ul>
        {props.items.map(item => {
          return (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShoppingList

