import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles({
  root: {
    margin:"20px 20px 20px 20px",
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableCalendar(props) {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: props.themeColor,
      color: props.headFontColor
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = props.events.filter(appointment => props.checked.indexOf(appointment.group) !== -1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Title</StyledTableCell>
                <StyledTableCell >Group</StyledTableCell>
                <StyledTableCell >Start Date</StyledTableCell>
                <StyledTableCell >End Date</StyledTableCell>
                <StyledTableCell >Note</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              const week = ["Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat "]
              const startDate = week[row.startDate.getDay()]+row.startDate.toTimeString().substring(0,5)
              const endDate = week[row.endDate.getDay()]+row.endDate.toTimeString().substring(0,5)
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.group}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>{row.notes}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
