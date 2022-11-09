import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import WorkInProgress from "./pages/WorkInProgress";

const Router = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/teste" element={ <Register /> } />
      <Route path="/wip" element={ <WorkInProgress /> } />
    </Routes>
    </>
  );
};

export default Router;