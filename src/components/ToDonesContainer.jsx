import {useContext} from 'react'
import { MyContext } from '../context/ContextContainer'
import ToDoneItem from './ToDoneItem'
const ToDonesContainer = () => {
   const{todones}=useContext(MyContext);
   
    const toDonesItems= todones.map((todone) => {
        return (
          <ToDoneItem key={todone.text} item={todone} />
        );
      })


  return (
    <div className="todones-container">
        <h3>BACKLOG</h3>
        {todones.length>0 && toDonesItems}
    </div>
  )
}
export default ToDonesContainer;