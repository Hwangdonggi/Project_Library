import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import Search from "../search/Search";

type Books = {
  id: number;
  book_name: string;
  author_name: string;
  company: string;
  price: string;
  ISBN: string;
};
type BooksType = {
  book: Books[];
};

const Routing = ({ book }: BooksType) => {
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
