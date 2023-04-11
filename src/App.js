import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Users from "./pages/Users";
import UserShow from "./pages/UserShow";
import UserEdit from "./pages/UserEdit";
import UserAdd from "./pages/UserAdd";

function App() {
  return ( 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/users/:id/edit" element={<UserEdit />} />
            <Route path="/users/:id" element={<UserShow/>} />
            <Route path="/users/create" element={<UserAdd/>} />
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
