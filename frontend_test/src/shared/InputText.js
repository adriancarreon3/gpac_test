import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, TextField } from '@material-ui/core';

export const InputText = ({label, name, value, onChange}) => {
    
    const classes = useStyles();

    return (
        <TextField
            autoComplete="off"
            label={label}
            className={classes.inputForm}
            InputProps={{ className: classes.input}}
            InputLabelProps={{style: { color: 'white' }}}
            name={name}
            variant="outlined"
            value={value}
            onChange={onChange}
        />
    )
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
}

const useStyles = makeStyles((theme) =>({
    input: {
        color: 'white'
    },
    inputForm:{
        backgroundColor: theme.palette.appbar.main,
        borderRadius: '5px',
        width: '180px'
    },
}));
