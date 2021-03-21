import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [nameInput, setnameInput] = useState("")
  const [imageInput, setimageInput] = useState("")
  const [priceInput, setpriceInput] = useState("")

function updateInput(event){
if (event.target.name === "name") {
  setnameInput(event.target.value)
}
else if (event.target.name === "image") {
  setimageInput(event.target.value)
}
else if (event.target.name === "price") {
  setpriceInput(event.target.value)
}}

function submitplant(){
 addPlant({
   name: nameInput,
   image: imageInput,
   price: priceInput,
 })
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitplant}>
        <input onChange={updateInput} value={nameInput}type="text" name="name" placeholder="Plant name" />
        <input onChange={updateInput} value={imageInput}type="text" name="image" placeholder="Image URL" />
        <input onChange={updateInput} value={priceInput}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm
