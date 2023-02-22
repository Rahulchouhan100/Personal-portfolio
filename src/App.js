import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Skill from "./component/Skill";
import Links from "./component/Links";
import Navbar from "./component/Navbar";
import "./index.css";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <div className="font-[Arial]">
        <Navbar />
        <Links />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        // children: [
        //   {
        //     path: "/skills",
        //     element: <Skill />,
        //   },
        // ],
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default App;
