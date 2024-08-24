import { TableHead, TableRow, TableCell } from "@mui/material";

const SearchHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Book Name</TableCell>
        <TableCell>Author Name</TableCell>
        <TableCell>Company</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>ISBN</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default SearchHead;
