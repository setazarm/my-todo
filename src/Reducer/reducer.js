const reducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            const newItem = { text: action.payload, done: false, id: state.length };

            localStorage.setItem("todos", JSON.stringify([...state, newItem]));
            return [...state, newItem]
        case "UPDATE_ITEM":
            const updatedItems = state.map((item) => {

                return item.id === action.payload
                    ? { ...item, done: !item.done } : item
            });
            localStorage.setItem("todos", JSON.stringify(updatedItems));
            return updatedItems;
        case "ONLOAD":
            return JSON.parse(localStorage.getItem("todos"))
        default:
            throw new Error("No action found")
    }
}
export default reducer