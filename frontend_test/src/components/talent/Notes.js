import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const Notes = () => {

    const classes = useStyles();

    return (
        <Box className={classes.boxMain}>
            
            <Box display="flex" flexDirection="row" width='100%'>
                <h3>Notes</h3>
            </Box>

            <Box display="flex" flexDirection="row" width='100%' mt="30px">
                <span className={classes.text}>There's no notes. Do you want to add a new one?</span>
            </Box>

        </Box>
    )
}

const useStyles = makeStyles((theme) =>({
    boxMain:{
        backgroundColor: theme.palette.secondary.detail ,
        borderRadius: '5px',
        marginTop: '30px',
        padding:'20px',
        width: '100%',
    },
    text:{
        color: '#848484',
        fontSize: '14px',
    }
}));