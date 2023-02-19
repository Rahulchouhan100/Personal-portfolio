import { createBrowserRouter } from "react-router-dom";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
  },
]);

export default App;
