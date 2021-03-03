import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const LocationItem = ({activity, city, name ,phone, selected, title, zipCode}) => {
    
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row" className={selected === true ? clsx(classes.selected, classes.main) : classes.main}>
            <Box display="flex" flexDirection="column" className={classes.colCompany}>
                <span className={classes.title}>{ title }</span>
                <span className={classes.companyName}>{ name }</span>
                <span className={classes.subtitle}>{ activity }</span>
            </Box>

            <Box display="flex" flexDirection="column" className={classes.colLocation}>
                <span className={classes.subtitle}>{ city }</span>
                <span className={classes.subtitle}>{ zipCode }</span>
                <span className={classes.subtitle}>{ phone }</span>
            </Box>
        </Box>
    )
}

LocationItem.propTypes = {
    activity: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
}

const useStyles = makeStyles((theme) =>({
    colCompany:{
        justifyContent: 'space-between',
        width: '60%'
    },
    colLocation:{
        textAlign: 'right',
        width: '40%',
    },
    companyName:{
        fontSize: '20px',
        font: 'normal normal bold 20px/26px',
        letterSpacing: '0.4px',
    },
    main:{
        cursor: 'pointer',
        height: '105px',
        justifyContent: 'space-between',
        padding: '10px',

        '&:hover':{
            backgroundColor: '#323C4A'
        }
    },
    selected:{
        backgroundColor: '#323C4A'
    },
    title: {
        font: 'normal normal 300 18px/24px',
        letterSpacing: '0.36px',
    },
    subtitle:{
        font:' normal normal 300 16px/21px',
        letterSpacing: '0.32px',
    },
    
}));