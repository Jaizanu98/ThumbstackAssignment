import React, { useContext } from 'react';
import { Grid, makeStyles, Paper, Typography, } from '@material-ui/core';

import { SocketContext } from "../Context"
const useStyles = makeStyles((theme) => ({
    video: {
      width: '30rem',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
        
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
        background:'wheat',
      padding: '8px',
      border: '0px solid black',
      margin: '10px',
    },
  }));
  
  const Player = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();
  
    return (
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper   className={classes.paper}>
            <Grid  item xs={12} md={3}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video  playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    );
  };

export default Player