import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchHead from "./searchElements/SearchHead";
import SearchTable from "./searchElements/SearchTable";
import { useEffect, useState } from "react";
// type Books = {
//   id: number;
//   book_name: string;
//   author_name: string;
//   company: string;
//   price: string;
//   ISBN: string;
// };
// type BooksType = {
//   book: Books[];
// };

const Search = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/book"); //API 불러오기

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setBook(data);
      } catch (err) {
        console.log("Error fetching tutors:", err);
      }
    };
    fetchTutors();
  }, []);
  return (
    <TableContainer>
      <Table>
        <SearchHead />
        <SearchTable book={book} />
      </Table>
    </TableContainer>
  );
};
export default Search;
