import "./styles/style.scss"
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
