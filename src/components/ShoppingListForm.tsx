import React, { useRef } from 'react'

interface ShoppingListFormProps {
    addItem: (item: string, quantity: number) => void
}

function ShoppingListForm({addItem}: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newProduct = productInputRef.current!.value
    const newQuantity = Number(quantityInputRef.current!.value)
    addItem(newProduct, newQuantity)
    productInputRef.current!.value = ""
    quantityInputRef.current!.value = "1"
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={productInputRef} type="text" placeholder="Product Name" />
        <input type="number" min={0} ref={quantityInputRef}/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default ShoppingListForm
