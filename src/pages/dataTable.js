import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../redux/actions/action";
import AddItem from "../components/addModal";

const columns = [
  {
    id: "title",
    label: "Sr.no.",
    minWidth: 40,

    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "title",
    label: "Title",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const ItemList = () => {
  const dispatch = useDispatch();
  const { allItems, newItemData } = useSelector((state) => state?.itemReducer);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [itemData, setItemData] = React.useState([]);
  const [newData, setNewData] = React.useState(newItemData);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    if (allItems?.data) {
      setItemData(allItems.data);
    }
  }, [allItems]);

  React.useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch, newItemData]);

  const handleAdd = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {open && <AddItem open={open} setOpen={setOpen} />}
      <Container maxWidth="lg">
        <Box>
          <Button variant="contained" onClick={() => handleAdd()}>
            Add New Item
          </Button>
        </Box>
        <Box>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemData?.length > 0
                    ? itemData
                        ?.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        ?.map((row, index) => (
                          <TableRow hover key={index}>
                            <TableCell align="left">{index + 1}</TableCell>
                            {columns?.slice(1)?.map((column) => (
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                    : "no data found"}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={allItems?.data?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ItemList;
