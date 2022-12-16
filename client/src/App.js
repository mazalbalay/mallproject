import CheckOut from "./components/CheckOut"
import React  from "react";
import { BrowserRouter , Routes  , Route , Link} from "react-router-dom";
import CreateDepartment from "./components/Admin/CreateDepartment";
import CreateStore from "./components/Admin/CreateStore";
import Departments from "./components/Admin/Departments";
import Main from "./components/Admin/Main";
import Stores from "./components/Admin/Stores";
// import Auth from "./components/authentication/Auth";

function App() {
  return (
    <>
        <Main/>
    <Routes>
         {/* <Route exact path="/auth" element={<Auth />} /> */}
          <Route exact path="/checkout" element={<CheckOut/>} />
          <Route exact path="/Admin/main" element={<Main/>} />
          <Route exact path="/Admin/Department/new" element={<CreateDepartment/>} />
          <Route exact path="/Admin/Stores/new" element={<CreateStore/>} />
          <Route exact path="/Admin/Departments" element={<Departments/>} />
          <Route exact path="/Admin/Stores" element={<Stores/>} />
      </Routes>

  



  </>
  );
}

export default App;
