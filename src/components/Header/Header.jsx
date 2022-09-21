import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import { NavLink } from 'react-router-dom'
// import { Box } from '@material-ui/core';
// core version + navigation, pagination modules:

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    background: '#F6F3E4',
    borderBottom: '1px solid #E3DDBB',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#212121',
  }
}));

// const MODE = {
//   LOGIN: 'login',
//   REGISTER: 'register'
// }

export default function Header() {
  const classes = useStyles();
  // const [mode, setMode] = useState(MODE.LOGIN)

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src="https://sixdo.vn/images/logo.svg" width='100px' height='20px' alt="" />
          </Typography>
          <NavLink className={classes.link} to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink className={classes.link} to="/products">
            <Button color="inherit">Products</Button>
          </NavLink>
          <NavLink className={classes.link} to="/wws">
            <Button color="inherit">WWS</Button>
          </NavLink>
          <NavLink className={classes.link} to="/collection">
            <Button color="inherit">Collection</Button>
          </NavLink>
          <NavLink className={classes.link} to="/cart">
            <Button color="inherit">Cart</Button>
          </NavLink>
          <NavLink className={classes.link} to="/shop">
            <Button color="inherit">Shopping</Button>
          </NavLink>
          <NavLink className={classes.link} to="/register">
            <Button color="inherit">Register</Button>
          </NavLink>
          {/* {mode === MODE.REGISTER && (
            <>
              <Box textAlign="center">
                <Button color='primary' onClick={() => setMode(MODE.REGISTER)}>
                  Dont have an account. Login Here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Box textAlign="center">
                <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login Here
                </Button>
              </Box>
            </>
          )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
