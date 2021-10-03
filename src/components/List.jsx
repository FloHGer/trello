import React, {useState} from "react";
import {listOfCards} from "./data.js";
import ListEntry from "./ListEntry.jsx";
import NewEntry from './NewEntry.jsx';

export default function List({index}) {
  const [list, setList] = useState(listOfCards[index].children)
  return (
    <div className='list'>
      <h2>{listOfCards[index].title}</h2>
      <ul className='entries'>
        {list.map(entry => {
          return <ListEntry key={entry.id} value={entry.text} list={list} setList={setList} />;
        })}
      </ul>
      <NewEntry list={list} setList={setList} />
    </div>
  );
}
