import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';



export default function Grocerybud() {
    const [item, setitem] = useState("")
    const [list, setlist] = useState(getValues)


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
      }, [list]);
    function getValues() {
        const valuess = localStorage.getItem('list')
        if (!valuess) {
            return []
        }
        return JSON.parse(valuess)
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    setlist((grocery) => {
        return (
           [...grocery, {id: uuidv4(), name: item, isComplete: false}]
        )
    })

   }
   function deleteItem(index) {
 const newList = setlist((list) => {
    
    return list.filter((grocery) => grocery.id !== index)})
 return newList
   }
   function editItem(id) {
    const newList = list.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            isComplete: !item.isComplete,
          };
  
          return updatedItem;
        }
  
        return item;
      })
      
      
      setlist(newList);

   }

console.log(list)

    return (
        <div>

<form onSubmit={handleSubmit}>
    <input type="text" value={item} onChange={(e) => setitem(e.target.value)}/>
    <button type="submit">create list</button>
</form>

<div>
    {list.map((g1,index) => {
        const {id, name, isComplete} = g1
        return (
            <div key={index}><div style={{
                textDecoration: isComplete
                  ? 'line-through'
                  : 'none',
              }}>{name}</div>
            <button onClick={() => editItem(id)}>edit</button>
            <button onClick={() => deleteItem(id)}>delete</button></div>
        )
    })}
</div>
        </div>
    )
}