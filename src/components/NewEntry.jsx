import React from 'react'

export default function NewEntry({list, setList}) {

  const newEntry = () =>{
    const input = prompt('Card Text:');
    setList(current => [...current, {id: list.lenght + 1, text: input}])
  }
  
  return(
    <>
      <button onClick={newEntry}>add another card</button>
    </>
  )
}