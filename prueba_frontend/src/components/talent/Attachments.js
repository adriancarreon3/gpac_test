import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

export const Attachments = () => {

    const classes = useStyles();

    return (
        <Box className={classes.boxMain}>
            <Box display="flex" flexDirection="row" width='100%'>
                <h3>Attachments</h3>
            </Box>

            <Box display="flex" flexDirection="column">
                <AttachmentItem title="Resume"/>
                <AttachmentItem title="Cover Letter"/>
                <AttachmentItem title="Portfolio"/>
                <AttachmentItem title="Reference Check"/>
                <AttachmentItem title="Free Agreement"/>
            </Box>
        </Box>
    )
}

const AttachmentItem = ({ title }) => {
    const classes = useStyles();
    
    return (
        <Box display="flex" flexDirection="row" marginTop="20px">
            <Box display="flex" flexDirection="column" width="100%">

                <Box display="flex" flexDirection="row">
                    <span className={classes.title}>{ title }</span>
                </Box>

                <Box display="flex" flexDirection="row" className={classes.options}>
                    <span>No files here</span>

                    <Box display="flex" flexDirection="row" className={classes.rowButtons}>

                        <Button
                            variant="outlined" 
                            className={classes.btnDiscard}
                            endIcon={<PublishOutlinedIcon />}
                        >
                            Upload new file
                        </Button>


                        <Button
                            variant="contained"
                            className={classes.button}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

const useStyles = makeStyles((theme) =>({
    boxMain:{
        backgroundColor: theme.palette.secondary.detail ,
        borderRadius: '5px',
        marginTop: '60px',
        padding:'20px',
        width: '100%',
    },
    button: {
        background: '#4056F4',
        border: 'solid 1px #4056F4',
        borderRadius: '2px',
        color: 'white',
        fontSize: '14px',
        height: '40px',
        textTransform: 'none',

        '&:hover':{
            background: '#4056F4',
        }
    },
    btnDiscard: {
        color: 'white',
        fontSize: '14px',
        borderColor: '#3B4048',
        textTransform: 'none',
        height: '40px',
    },
    options:{
        alignItems:'center',
        color: '#A8A8A8',
        justifyContent: 'space-between',
        width: '100%',
    },
    rowButtons:{
        justifyContent: 'space-between',
        width: '35%',
    },
    title:{
        fontWeight: 'bold',
        fontSize: '16px',
        letterSpacing: '0.32px',
    }
}));
