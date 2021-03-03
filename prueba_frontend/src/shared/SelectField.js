import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, MenuItem, TextField } from '@material-ui/core';

export const SelectField = ({label, name, value, onChange, options}) => {

    const classes = useStyles();

    return (
        <TextField
            select
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined"
            className={classes.selectForm}
            InputProps={{ className: classes.input}}
            InputLabelProps={{style: { color: 'white' }}}
            SelectProps={{classes: { icon: classes.iconSelect }}}
        >
            {
                options.map(option => (
                    <MenuItem 
                        key={ option.value ? option.value : option.id_location} 
                        value={option.value ? option.value : option.id_location}
                    >
                        {option.name}
                    </MenuItem>
                ))
            }
        </TextField>
    )
}

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.any.isRequired,
}

const useStyles = makeStyles((theme) =>({
    iconSelect: {
        fill: theme.palette.primary.detail,
    },
    input: {
        color: 'white'
    },
    selectForm:{
        backgroundColor: theme.palette.appbar.main,
        borderRadius: '5px',
        color: 'white !important',
        width: '180px'
    },
}));
