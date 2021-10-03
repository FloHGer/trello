import React from 'react'

export default function ListEntry({value, list, setList}) {
  const removeSelf = () => {
    const filteredList = list.filter(entry => entry.text !== value)
    setList(filteredList)
  }
  
  return (
    <li className='entry'>
      <p>{value}</p>
      <button className='delete' onClick={removeSelf}>x</button>
    </li>
  )
}
