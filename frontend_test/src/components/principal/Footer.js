import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainBox} display="flex" flexDirection="row">

            <Box>
                <span>GPAC Directory v0.1 - 2019</span>
            </Box>
            
            <Box>
                <span>Help - Tutorials - Support - FAQ’s</span>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    mainBox: {
        alignItems: 'center',
        background: theme.palette.secondary.sidebar,
        color: '#CECECE',
        height: '3vh',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
}));

