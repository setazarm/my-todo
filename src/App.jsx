import "./scss/App.scss"
import Navigation from "./components/Navigation";
import ToDonesContainer from "./components/ToDonesContainer";
import ToDosContainer from "./components/ToDosContainer";

import{Routes,Route} from "react-router-dom"
import Help from "./views/Help"
import NotFound from "./views/NotFound";
import ContextContainer from "./context/ContextContainer";
function App() {
  

  
  return (
   <ContextContainer>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ToDosContainer/>
                <ToDonesContainer 
                // items={todones} handleChange={updateItem} 
                />
              </>
            }
          />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      </ContextContainer>
    );
  
}

export default App;