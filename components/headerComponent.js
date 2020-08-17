import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid,Container} from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding:0,
    margin:0,
  },
  menuButton: {
    margin:0,
  },
  title: {
    flexGrow: 1,
  },
  appbar2: {
      height:100,
      maxWidth:"100%",
      padding:0,
      margin:0,
      backgroundColor:"red",
  },
  logButton2:{
      float:"right",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid xs={12}>
        <head>
            <title>
                My first Next App
            </title>
        </head>
        <AppBar position="static" maxWidth="100%">
            <Toolbar>
            <Typography variant="h3" className={classes.title}>
                News
            </Typography>
            <Button color="inherit" className={classes.logButton2}>Login</Button>
            </Toolbar>
        </AppBar>
    </Grid>
  );
}
