import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";

const Router = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/teste" element={ <Register /> } />

    </Routes>
    </>
  );
};

export default Router;