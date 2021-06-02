import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Rewards() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Rewards Progress</Title>
      <Typography component="p" variant="h4">
        20
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Total Books Read
      </Typography>
      <div>
        <Link color="primary" href="/rewards">
          View Rewards
        </Link>
      </div>
    </React.Fragment>
  );
}
