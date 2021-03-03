import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { TableInfo } from '../../shared/TableInfo';

export const MarketPage = ({history}) => {

    const classes = useStyles();

    const { id_role } = useSelector(store => store.auth);

    const handleClick = (e) =>{
        e.preventDefault();
        history.push('/new-talent');
    }

    return (
        <Box 
            bgcolor="primary.main"
            width={1}
            // height={1}
        >
            <Box className="market__titleRow" display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row">
                    <Box className="market__circleIcon">
                        <FiberManualRecordIcon style={{ color: '#FD3939' }} fontSize="large"/>
                    </Box>

                    <Box className="market__title">
                        <h1>Market</h1>
                    </Box>
                </Box>

                <Box>
                    {
                        (id_role !== 1) && 
                            <Button
                                variant="contained"
                                className={classes.button}
                                endIcon={<AddCircleOutlineIcon/>}
                                onClick={handleClick}
                            >
                                <span style={{paddingRight: '20px'}}>Add new talent</span>
                            </Button>
                    }
                </Box>
            </Box>

            <div style={{ marginTop:'20px', marginLeft:'50px', marginRight:'4rem'}}>
                <TableInfo />
            </div>

        </Box>

    )
}

const useStyles = makeStyles({
    button: {
        background: '#4056F4',
        border: 'solid 1px #4056F4',
        color: 'white',
        textTransform: 'capitalize',
        '&:hover':{
            background: '#4056F4'
        }
    },
});
