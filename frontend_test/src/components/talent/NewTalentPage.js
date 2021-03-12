import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles} from '@material-ui/core/styles';
import { AppBar, Backdrop, Box, Button, CircularProgress, Snackbar, Tab, Tabs } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { useForm } from '../hooks/useForm';
import { InputText } from '../../shared/InputText';
import { SelectField } from '../../shared/SelectField';
import { addNewRecruit } from '../../actions/recruit'
import {
    statusOptions,
    functionalTitles,
    seniorityOptions,
    industries,
    companies,
    statusProcessOptions,
    relocationOptions,
} from '../../data/data';
import { useIsMount } from '../hooks/useIsMount'
import { Attachments } from './Attachments';
import { Notes } from './Notes';

export const NewTalentPage = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();
    
    const [valueTab, setValueTab] = useState(0);
    const handleChangeTab = (event, newValue) => {
        setValueTab(newValue);
    };

    const { locations } = useSelector(state => state.recruit);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    }

    const [loading, setLoading] = useState(false);

    const isMount = useIsMount();
    const { recruits } = useSelector(state => state.recruit);
    useEffect(async() => {
        if (!isMount){
            setOpenSnackbar(true);
            setTimeout(() => {
                history.push('/market');
            }, 3000);
        }
    }, [recruits])

    const [formValues, handleInputChange] = useForm({
        first_name:'',
        last_name:'',
        status:'Status 1',
        wish_salary:'',
        functional_title:'Functional Title 1',
        title:'',
        seniority:'1 year',
        industry:'Industry 1',
        id_location:1,
        phone:'',
        email:'',
        company:'Company 1',
        status_process:'Status Process 1',
        relocation:'Yes',
    });

    let {
        first_name,
        last_name,
        status,
        functional_title,
        wish_salary,
        title,
        seniority,
        industry,
        id_location,
        phone,
        email,
        company,
        status_process,
        relocation,
    } = formValues;

    const handleClickDiscard = (e) => {
        e.preventDefault();
        history.push('/market');
    }

    const handleSubmit = (e) => {
        setLoading(true);

        e.preventDefault();
        const newRecruit = {
            first_name,
            last_name,
            status,
            wish_salary,
            functional_title,
            title,
            seniority,
            industry,
            id_location,
            phone,
            email,
            company,
            status_process,
            relocation,
        }

        dispatch(addNewRecruit(newRecruit));

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }

    return (
        <Box 
            bgcolor="primary.main"
            width={1}
            height={1}
        >
            <Box className="market__titleRow" display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row">
                    <Box className="market__circleIcon">
                        <FiberManualRecordIcon style={{ color: '#FD3939' }} fontSize="large"/>
                    </Box>

                    <Box className="market__title">
                        <h1>New Talent</h1>
                    </Box>
                </Box>
            </Box>

            <Box display="flex" flexDirection="row" className={classes.rowMain}>

                <Box display="flex" flexDirection="column" className={classes.rowActions}>
                    
                    <img src="./assets/avatars/avatar1_big.png" alt="avatar"/>

                    <Button
                        variant="contained"
                        className={classes.button}
                    >
                        Save as draft
                    </Button>

                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Save and send to coach
                    </Button>

                    <Button 
                        variant="outlined" 
                        className={classes.btnDiscard}
                        onClick={handleClickDiscard}
                    >
                        Discard
                    </Button>

                </Box>


                <Box display="flex" flexDirection="column" className={classes.container}>
                    <Box>
                        <AppBar position="static" elevation={0}>
                            <Tabs 
                                value={valueTab} 
                                onChange={handleChangeTab} 
                                className={classes.tabs}
                            >
                                <Tab className={classes.tabSelected} label="Profile"/>
                                <Tab className={classes.tab} disabled label="Resume" />
                                <Tab className={classes.tab} disabled label="Social Profiles" />
                            </Tabs>
                        </AppBar>
                        
                        <Box className={classes.boxForm}>
                            <Box display="flex" flexDirection="row" className={classes.rowForm}>

                                <InputText
                                    label="First Name"
                                    name="first_name"
                                    value={first_name}
                                    onChange={handleInputChange}
                                />

                                <InputText
                                    label="Last Name"
                                    name="last_name"
                                    value={last_name}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Status"
                                    name="status"
                                    value={status}
                                    options={statusOptions}
                                    onChange={handleInputChange}
                                />
                            </Box>

                            <Box display="flex" flexDirection="row" className={classes.rowForm}>
                                <InputText
                                    label="Wish Salary"
                                    name="wish_salary"
                                    value={wish_salary}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Functional Title"
                                    name="functional_title"
                                    value={functional_title}
                                    options={functionalTitles}
                                    onChange={handleInputChange}
                                />

                                <InputText
                                    label="Title"
                                    name="title"
                                    value={title}
                                    onChange={handleInputChange}
                                />
                            </Box>

                            <Box display="flex" flexDirection="row" className={classes.rowForm}>
                                <SelectField 
                                    label="Seniority"
                                    name="seniority"
                                    value={seniority}
                                    options={seniorityOptions}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Industry"
                                    name="industry"
                                    value={industry}
                                    options={industries}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Location"
                                    name="id_location"
                                    value={id_location}
                                    options={locations}
                                    onChange={handleInputChange}
                                />
                            </Box>

                            <Box display="flex" flexDirection="row" className={classes.rowForm}>
                                <InputText
                                    label="Phone"
                                    name="phone"
                                    value={phone}
                                    onChange={handleInputChange}
                                />

                                <InputText
                                    label="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Company"
                                    name="company"
                                    value={company}
                                    options={companies}
                                    onChange={handleInputChange}
                                />
                            </Box>

                            <Box display="flex" flexDirection="row" className={classes.rowForm}>
                                <SelectField 
                                    label="Status for Process"
                                    name="status_process"
                                    value={status_process}
                                    options={statusProcessOptions}
                                    onChange={handleInputChange}
                                />

                                <SelectField 
                                    label="Relocation"
                                    name="relocation"
                                    value={relocation}
                                    options={relocationOptions}
                                    onChange={handleInputChange}
                                />

                                <Box style={{width:"180px"}}></Box>
                            </Box>

                        </Box>

                    </Box>
                    
                    <Attachments />

                    <Notes/>
                </Box>
            </Box>


            <Snackbar 
                autoHideDuration={3000} 
                open={openSnackbar} 
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
                    Successful operation
                </Alert>
            </Snackbar>

            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>

        </Box>

    )
}

const useStyles = makeStyles((theme) =>({
    backdrop: {
        color: '#fff',
        zIndex: theme.zIndex.drawer + 1,
    },
    button: {
        background: '#4056F4',
        color: 'white',
        textTransform: 'none',
        border: 'solid 1px #4056F4',
        borderRadius: '2px',
        height: '40px',
        width: '80%',

        '&:hover':{
            background: '#4056F4',
        }
    },
    btnDiscard: {
        color: 'white',
        fontSize: '16px',
        borderColor: '#3B4048',
        textTransform: 'capitalize',
        height: '40px',
        width: '80%'
    },
    container: {
        marginRight: '10%',
        width: '75%',
    },
    boxForm: {
        backgroundColor: theme.palette.secondary.detail,
        borderRadius: '5px',
        height: "95%"
    },
    imgAvatar:{
        width: '180px',
    },
    rowActions:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: "25%",
        height: "70%",
    },
    rowMain:{
        display: 'flex',
        marginTop: '40px',
        height: '80%'
    },
    rowForm:{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '20px'
    },
    tabs:{
        '&:selected':{
            backgroundColor: 'yellow',
            background:'yellow',
            color:'yellow'
        }
    },
    tabSelected:{
        backgroundColor: theme.palette.secondary.detail,
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        textAlign: "left",
        textTransform: 'none',
    },
    tab:{
        backgroundColor: '#4056F4',
        textTransform: 'none',
    },
}));