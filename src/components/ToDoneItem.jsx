import { useContext } from "react";
import { MyContext } from "../context/ContextContainer";
function ToDoneItem({ item }) {
  const { updateItem } = useContext(MyContext);

  return (
    <div className="todones-item">
      <p>{item.text}</p>
      <div className="actions">
        <button onClick={() => updateItem(item.id)} className="btn">
          &#8635;
        </button>
      </div>
    </div>
  );
}

export default ToDoneItem;
