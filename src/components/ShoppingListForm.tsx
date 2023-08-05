import React, { useRef } from 'react'

interface ShoppingListFormProps {
    addItem: (item: string) => void
}

function ShoppingListForm({addItem}: ShoppingListFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newProduct = inputRef.current!.value
    addItem(newProduct)
    inputRef.current!.value = ""
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Product Name" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default ShoppingListForm
