import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import { useState } from "react";

const App = () => {
    const [showType, setShowType] = useState("table");
  return (
    <Routes>
      <Route path="/" element={<Home showType={showType} setShowType={setShowType} />} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  );
};
export default App;
