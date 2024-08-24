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

const Search = ({ book }: BooksType) => {
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
