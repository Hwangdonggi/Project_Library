import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Search from "../search/Search";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/membership" element={<Membership/>}></Route> */}
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
