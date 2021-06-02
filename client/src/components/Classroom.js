import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Class Data
function createData(id, date, name, completedBooks, rewardProgress) {
  return { id, date, name, completedBooks, rewardProgress };
}

const rows = [
  createData(
    0,
    'May, 2021',
    'Elvis Presley',
    '4',
    'Stars can go here instead of percent'
  ),
  createData(1, 'May, 2021', 'Paul McCartney', '5', '50%'),
  createData(2, 'May, 2021', 'Tom Scholz', '3', '30%'),
  createData(3, 'May, 2021', 'Michael Jackson', '7', '70%'),
  createData(4, 'May, 2021', 'Bruce Springsteen', '2', '20%'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Classroom() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Classroom</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Completed</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Books Completed</TableCell>
            <TableCell>Reward Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.completedBooks}</TableCell>
              <TableCell>{row.rewardProgress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          View More Students
        </Link>
      </div>
    </React.Fragment>
  );
}
