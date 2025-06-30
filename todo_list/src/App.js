import './App.css';
import { useState } from 'react';


function App() {

  const[input, setInput] = useState("");
  const[list, setList] = useState([]);
  const[uid, setUid] = useState("");
  const[update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleTask = () =>{
    setList([...list, input])
    setInput("")
  }

  const handleUpdate = () =>{
    list.splice(uid, 1, input)
    setInput("")
    setUpdate(false)
  }

  const handleDelete = (i)=>{
    const filterList = list.filter((elm)=> elm !== list[i])
    setList(filterList)
  }

  const handleEdit = (i)=>{
    const filterList = list.filter((elm)=> elm === list[i])
    setInput(filterList[0])
    setUid(i)
    setUpdate(true)
  }

  return (
    <div className="App">
        <h2>Todo App</h2>
        <div className="container">
          <div className="input-box">
              <input type="text" value={input} onChange={(e) => handleInput(e)} placeholder='Enter task' />
              {update ? <button onClick={handleUpdate}>Update</button>: <button onClick={handleTask}>Add Task</button>}
          </div>
          <div className="list">
            <ul>
             {list.map((item, i)=> <li key={i} >{item} <i class="bi bi-trash3-fill" onClick={()=>handleDelete(i)}></i>  <i class="bi bi-pencil-fill" onClick={()=>handleEdit(i)}></i> </li>)}
            </ul>
          </div>
          </div>
      
    </div>
  );
}

export default App;
