import React from 'react';
import clsx from 'clsx';
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Box, CssBaseline } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { MarketPage } from '../components/principal/MarketPage';
import { MapPage } from '../components/map/MapPage';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Navbar } from '../components/principal/Navbar';
import { NewTalentPage } from '../components/talent/NewTalentPage';

export const TalentRouter = () => {

    const classes = useStyles();

    return (
        <div className={clsx('App', classes.root)}>
                
            <CssBaseline/>

            <Navbar/>

            <Sidebar/>

            <div className={classes.content}>
                <Box maxWidth="lg" className={classes.container}>
                    <Switch>
                    
                        <Route exact path="/market" component={ MarketPage } />
                        <Route exact path="/new-talent" component={ NewTalentPage } />
                        <Route exact path="/map" component={ MapPage } />

                        <Redirect to='/market' />
                        
                    </Switch>
                </Box>
            </div>

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: '97vh',
      overflow: 'auto',
      color: 'white',
    },
    container: {
      height: '95vh',
      paddingTop: theme.spacing(8),
    },
}));
