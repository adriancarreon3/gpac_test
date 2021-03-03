import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';

import { useForm } from '../hooks/useForm';
import { loginAction } from '../../actions/auth';

export const LoginPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email:'',
        password:'',
    });

    const {
        email,
        password,
    } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginAction(email,password));
    }

    return (
        <Box className={classes.boxMain}>
            <Box className={classes.boxLogin}>

                <Box display="flex" flexDirection="column" >
                    <div className="sidebar__logo">
                        <img src={`../assets/logo.png`} alt='logo' />
                    </div>

                    <Box display="flex" flexDirection="row" className={classes.title}>
                        <h2>Talent Page</h2>
                    </Box>

                    <form onSubmit={ handleLogin }>
                        <Box display="flex" flexDirection="column" className={classes.form}>

                            <TextField 
                                autoComplete="off"
                                name="email"
                                label="Email"
                                value={email}
                                className={classes.inputForm}
                                onChange={handleInputChange}
                                variant="filled"
                            />

                            <TextField 
                                autoComplete="off"
                                className={classes.inputForm}
                                label="Password"
                                name="password"
                                onChange={handleInputChange}
                                type="password"
                                value={password}
                                variant="filled"
                            />

                            <Button
                                variant="contained"
                                className={classes.button}                                
                                type="submit"
                            >
                                Login
                            </Button>

                        </Box>


                    </form>

                </Box>

            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    boxLogin:{
        backgroundColor: theme.palette.secondary.sidebar,
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        height: '53vh',
        width: '25vw',
    },
    boxMain:{
        alignItems:'center',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    },
    button: {
        background: '#4056F4',
        color: 'white',
        textTransform: 'capitalize',
        border: 'solid 1px #4056F4',
        '&:hover':{
            background: '#4056F4'
        }
    },
    form:{
        display:'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        height: '100%',
    },
    inputForm:{
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '250px',
    },
    title:{
        color: 'white',
        justifyContent: 'center'
    },
}));
