import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authFormStyles } from './styles/AuthFormStyles';
import { nameValidator } from '../helpers/authFormValidator';
import { login } from '../reducers/authSlice';
import AuthStorage from '../../../helpers/storage/AuthStorage';

const useStyles = makeStyles(authFormStyles);

export default function LoginFormContainer() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [{ name }, setUser] = useState({
    name: '',
  });
  const [errors, setErrors] = useState({
    name: '',
  });

  const setNameError = (error) => setErrors({ name: error });
  const resetNameError = () => setNameError('');

  const handleNameChange = (event) => {
    const { value: inputName } = event.target;
    const { error, isValid } = nameValidator(inputName);

    isValid ? resetNameError() : setNameError(error);
    setUser((prevUser) => ({ ...prevUser, name: inputName }));
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    const { error, isValid } = nameValidator(name);
    if (!isValid) {
      setNameError(error);
      return;
    }

    AuthStorage.setUser({ name });
    dispatch(login({ name }));

    history.push('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleLoginFormSubmit}>
          <TextField
            value={name}
            onChange={handleNameChange}
            error={errors.name.length > 0}
            helperText={errors.name.length > 0 ? errors.name : ''}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Username"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
