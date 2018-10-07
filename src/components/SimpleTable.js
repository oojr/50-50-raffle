import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    '0x53464f99ac16c52520dfa5f875463e18c0fa9f41',
    9,
    '0.0055 ETH',
    'true',
    '0.011 ETH'
  ),
  createData(
    '0x8bbf38eefffd64d61be6425d778ab6b91b64546a',
    37,
    '0.0043 ETH',
    'true',
    '0.0086 ETH'
  ),
  createData(
    '0xffa1d445f4c35af370788167ddd1b81c51c2f885',
    40,
    '0.0066 ETH',
    'false',
    '0.00132 ETH'
  ),
  createData(
    '0xffa1d445f4c35af370788167ddd1b81c51c2f885',
    14,
    '0.0033 POA',
    'true',
    '0.0066 POA'
  ),
  createData(
    '0x910916210feabd4b4b4a10a89dcd135150ed5196',
    23,
    '0.0088 ETH',
    'true',
    '0.0186 ETH'
  )
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Contract Address</TableCell>
            <TableCell numeric>Winning Ticket Number</TableCell>
            <TableCell numeric>Winning Amount </TableCell>
            <TableCell>Prize Claimed</TableCell>
            <TableCell numeric>Total Raised</TableCell>
            {/* <TableCell>Winner</TableCell>
            <TableCell>Charity</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <a href={`https://ropsten.etherscan.io/address/${row.name}`}>
                    {row.name}
                  </a>
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
