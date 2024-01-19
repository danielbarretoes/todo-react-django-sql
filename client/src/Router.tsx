import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home, Root } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
