import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import WorkInProgress from "./pages/WorkInProgress";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/signup" element={ <Register /> } />
      <Route path="/wip" element={ <WorkInProgress /> } />
      <Route path="/*" element={ <NotFound />} />
    </Routes>
    </>
  );
};

export default Router;