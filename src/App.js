import {BrowserRouter,Routes,Route} from "react-router-dom";
import Create from "./comp/Create";
import Delete from "./comp/delete/Delete";
import Emplisting from "./comp/emplist/Emplisting";
import Home from "./comp/home/Home";
import Read from "./comp/read/Read";
import Update from "./comp/update/Update";

function App() {
  return (
    <div className="App">
      <h1      >CRUD application</h1>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={
      <Emplisting/>
      
    }></Route>
     <Route path="/create" element={
      <Create/>
    }></Route>
    <Route path="/update/:id" element={
      <Update/>
    }>
    </Route>
    <Route path="/delete/:id" element={
      <Delete/>
    }>
      
    </Route>
    <Route path="/read/:id" element={
      <Read/>
    }>
      
    </Route>
  </Routes>
</BrowserRouter>
    </div>
  );



}

export default App;
