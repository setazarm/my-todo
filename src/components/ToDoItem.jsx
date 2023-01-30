import {useContext} from 'react'
import { MyContext } from '../context/ContextContainer'

function ToDoItem({item}) {
  const {updateItem}=useContext(MyContext)
  return (
    <div className="todos-container">
    <div className="todos-item">
    <p>{item.text}</p>
    </div>
     <div className="actions">
     <button onClick={()=>updateItem(item.id)} className="btn">&#10004;</button>
     </div>
  </div>
  )
}

export default ToDoItem