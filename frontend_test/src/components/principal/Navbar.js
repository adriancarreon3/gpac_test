import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, InputBase, Select, MenuItem, Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { logoutAction } from '../../actions/auth';

export const Navbar = () => {
    
    const classes = useStyles();

    const history = useHistory();
    const { pathname } = useLocation();

    const dispatch = useDispatch();


    const handleClickBack = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const handleClickMoreOptions = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    }

    return (
        <AppBar position="fixed" className={classes.appBar} color="secondary">
            <Toolbar>
                
                {
                    pathname!=='/new-talent' && (
                        <Box display="flex" flexDirection="row" className={classes.boxMain}>
                            <Box display="flex" flexDirection="row" className={classes.boxRow}>

                                <InputBase
                                    className={classes.inputSearch}
                                    placeholder="Quick Search..."
                                    inputProps={{ 'aria-label': 'naked' }}
                                />

                                <Select
                                    labelId="demo-simple-select-label"
                                    disableUnderline={true}
                                    value={10}
                                    className={classes.selectSearch}
                                    inputProps={{
                                        classes: {
                                            icon: classes.iconSelect,
                                        },
                                    }}
                                >
                                    <MenuItem value={10}>All Entities</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <Select
                                    labelId="demo-simple-select-label"
                                    disableUnderline={true}
                                    value={10}
                                    className={classes.selectSearch}
                                    inputProps={{
                                        classes: {
                                            icon: classes.iconSelect,
                                        },
                                    }}
                                >
                                    <MenuItem value={10}>Industry</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                                <Select
                                    labelId="demo-simple-select-label"
                                    disableUnderline={true}
                                    value={10}
                                    className={classes.selectSearch}
                                    style={{borderRight: "none"}}
                                    inputProps={{
                                        classes: {
                                            icon: classes.iconSelect,
                                        },
                                    }}
                                >
                                    <MenuItem value={10}>Location</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                
                                <IconButton 
                                    aria-label="delete"
                                    className={classes.buttonSearch}
                                >
                                    <SearchIcon fontSize="large" />
                                </IconButton>
                            </Box>

                            <Button variant="outlined" className={classes.btnAdvanceSearch}>
                                Advance Search
                            </Button>
                            
                            <MoreHorizIcon className={classes.iconOption} onClick={handleClickMoreOptions}/>



                        </Box>
                    )
                }

                {
                    pathname==='/new-talent' && (
                        <Box display="flex" flexDirection="row" className={classes.boxBack}>
                            <Button
                                variant="outlined"
                                className={classes.btnBack}
                                startIcon={<ArrowBackIosIcon className={classes.iconBack}/>}
                                onClick={handleClickBack}
                            >
                                Back
                            </Button>
                        </Box>

                    )
                }

            </Toolbar>
        </AppBar>
    )
}

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: '#20232B',
    },
    boxBack:{
        height: '100%',
        marginLeft: '15px',
    },
    boxMain:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    boxRow:{
        backgroundColor:'#2B313B', 
        borderRadius:'5px',
        width: '70%'
    },
    buttonSearch: {
        background: theme.palette.primary.detail,
        borderRadius: "0px",
        borderBottomRightRadius: '5px',
        borderTopRightRadius: '5px',
        color: 'white',
        height: '50px',
        width: '5%',
        
        '&:hover':{
            background: theme.palette.primary.detail,
        }
    },
    btnAdvanceSearch: {
        border: 'none',
        color: 'white',
        fontSize: '16px',
        textTransform: 'capitalize',
        width: '22.5%'
    },
    btnBack: {
        color: 'white',
        border: 'none',
        fontSize: '18px',
        textTransform: 'none'
    },
    iconBack:{
        fontSize: '34px !important',
        color: 'red'
    },
    input: {
        color: "white",
        height: '40px',
        paddingLeft: '15px',
    },
    inputSearch: {
        borderRight: 'solid 1px #CECECE',
        color: 'white',
        margin: theme.spacing(1),
        paddingLeft: '15px',
        paddingRight: '15px',
        width:'35%'
    },
    iconSelect: {
        fill: theme.palette.primary.detail,
    },
    iconOption: {
        cursor: 'pointer',
        color: 'white',
        fontSize:'50px',
        width:'7.5%', 
    },
    selectSearch: {
        backgroundColor: '#2B313B',
        borderRight: 'solid 1px #CECECE',
        color: "white",
        margin: theme.spacing(1),
        paddingRight: '15px',
        width: '20%',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));
