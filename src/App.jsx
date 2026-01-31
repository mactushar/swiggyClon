import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import DetailCarasoul from "./components/layout/DetailCarasoul";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection/:id/:type" element={<DetailCarasoul/>}/>
          
          
        </Route>
      </Routes>
    </>
  );
};
export default App;
