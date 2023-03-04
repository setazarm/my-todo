import {createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";
export const MyContext = createContext();
const ContextContainer = (props) => {
  const tasks = [
    { id: 0, text: "Buy shoes", done: false },
    { id: 1, text: "Buy beers", done: false },
    { id: 2, text: "Steal a bank", done: false },
    { id: 3, text: "Pay bills", done: false },
    { id: 4, text: "Learn React", done: true },
    { id: 5, text: "Build a website", done: true },
    { id: 6, text: "Reading", done: true },
    { id: 7, text: "Sleep", done: true },
  ];

  // const [items, setItems] = useState(tasks);
  const [state, dispatch] = useReducer(reducer, tasks);
  const todos = state.filter((item) => !item.done); // filter false
  const todones = state.filter((item) => item.done); // filter true

  const addItem = (value) => {
    dispatch({ type: "ADD_ITEM", payload: value });
  };

  const updateItem = (id) => {
    dispatch({ type: "UPDATE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'ONLOAD' });
}, []);

  return (
    <MyContext.Provider value={{ todos, todones, addItem, updateItem }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default ContextContainer;
