import { TableBody, TableRow, TableCell } from "@mui/material";

// type Subject = {
//   name: string;
//   schedule: string;
// };

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

const SearchTable = ({ book }: BooksType) => {
  return (
    <TableBody>
      {book.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.book_name}</TableCell>
          <TableCell>{item.author_name}</TableCell>
          <TableCell>{item.company}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{item.ISBN}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default SearchTable;
