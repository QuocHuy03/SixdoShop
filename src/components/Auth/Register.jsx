
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from 'notistack';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright © '} */}
      <Link color="inherit" href="/login">
        Already have an account. Login Here
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const msgErrors = {
    maxWidth: '100%',
    fontSize: '.75rem',
    color: 'rgb(248,106,106)',
    paddingTop: '10px',
    paddingLeft: '10px'
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      lastName: '',
      firstName: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Vui lòng nhập đầy đủ firstName'),
      lastName: Yup.string().required('Vui lòng nhập đầy đủ lastName'),
      email: Yup.string()
        .required("Vui lòng nhập đầy đủ email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Nhập Đúng Định Dạng Email"
        ),
      password: Yup.string()
        .required("Vui lòng nhập đầy đủ password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
    }),
    onSubmit: (values) => {
      enqueueSnackbar('Dang Ky Thanh Cong', { variant: 'success' });
      // formik.resetForm();
      navigate("/login")
      console.log(values);
    }
  })
  console.log(formik.errors);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              {formik.errors.firstName && <p style={msgErrors}>{formik.errors.firstName}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"

                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                autoComplete="lname"
              />
              {formik.errors.lastName && <p style={msgErrors}>{formik.errors.lastName}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"

                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="email"
              />
              {formik.errors.email && <p style={msgErrors}>{formik.errors.email}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                value={formik.values.password} onChange={formik.handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formik.errors.password && <p style={msgErrors}>{formik.errors.password}</p>}
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}