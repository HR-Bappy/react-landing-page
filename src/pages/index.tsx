import { Route, Routes } from "react-router-dom";
import Dashboard from "./home";
import Partners from "./partners";
import Aboutus from "./about-us";
import Contact from "./contact";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/partners", element: <Partners /> },
  { path: "/about-us", element: <Aboutus /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <h1>404</h1> }, // 404 Page
];

function PageRoutes() {
  return (
    <Routes>
      <>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </>
    </Routes>
  );
}
export default PageRoutes;
