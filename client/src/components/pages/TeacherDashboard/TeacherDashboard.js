import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Rewards from '../../Rewards';
import Classroom from '../../Classroom';
import Stars from '../../Stars';

export default function Dashboard() {
  return (
    <div>
      <main>
        <div />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Class Progress Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper>
                <Stars />
              </Paper>
            </Grid>
            {/* Rewards Progress */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper>
                <Rewards />
              </Paper>
            </Grid>
            {/* Classroom List */}
            <Grid item xs={12}>
              <Paper>
                <Classroom />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
}
