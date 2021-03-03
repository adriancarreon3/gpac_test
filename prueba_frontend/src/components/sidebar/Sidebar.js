import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { Box, Drawer, List } from '@material-ui/core';

import { SidebarMenuItem } from './SidebarMenuItem';

import Clock from '../../shared/Clock'

const appMenuItems = [
    {
      name: 'Dashboard',
      link: '/',
      icon: 'dashborad',
      disabled: true
    },
    {
      name: 'Job orders',
      link: '/orders',
      icon: 'orders',
      disabled: true
    },
    {
      name: 'Market',
      link: '/market',
      icon: 'market',
      disabled: false
    },
    {
      name: 'Companies',
      link: '/reports',
      icon: 'companies',
      disabled: true
    },
    {
      name: 'S. Projects',
      link: '/reports',
      icon: 'reports',
      disabled: true
    },
    {
      name: 'Map',
      link: '/map',
      icon: 'map',
      disabled: false
    },
    {
      name: 'Tasks Tool',
      link: '/reports',
      icon: 'tasks',
      disabled: true
    },
    {
      name: 'Sendouts',
      link: '/reports',
      icon: 'sendouts',
      disabled: true
    },
];

export const Sidebar = () => {


    const classes = useStyles();

    const [date, setDate] = useState();

    const getDate = () => {
      const currentDate = new Date().toDateString();
      let date = currentDate.substr(0,10).toUpperCase();
      setDate(date);
    }

    useEffect(() => {
      getDate();
    }, [])


    return (
      <div className="sidebar__main">
        <Drawer
          anchor="left"
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          // containerStyle={{height: '25%', top: 64}}
        >
          <div className="sidebar__logo">
            <img src={`./assets/logo.png`} alt='logo' />
          </div>

          <List>
            {appMenuItems.map(item => (
                <SidebarMenuItem key={item.name} {...item} />
            ))}
          </List>
            
          <Box display="flex" flexDirection="column" className={classes.boxDate}>
            
              <span className={classes.date}>{date}</span>
            
              <Clock format={'hh-mm'} hour12={false}/> 

              <span className={classes.subititleDate}>Actual Time</span>

          </Box>

        </Drawer>
      </div>
    )
}

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  boxDate:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35%'
  },
  date:{
    color: '#CECECE',
    font: 'normal normal 300 10px/13px',
    letterSpacing: '0.2px',
    textAlign: 'center',
    width: '60px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.secondary.sidebar,
    color: 'white',
    height: '97vh',
  },
  subititleDate:{
    color: 'white',
    font: 'normal normal 300 10px/13px',
    letterSpacing: '0.2px',
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
}));
