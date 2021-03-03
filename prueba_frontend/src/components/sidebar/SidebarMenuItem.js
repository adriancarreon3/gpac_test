import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, createStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

export const SidebarMenuItem = (props) => {

    const { name, link, icon, disabled } = props;
    const classes = useStyles()

    return (
        <>
            <ListItem button 
                disabled = { disabled }
                className={ classes.menuItem } 
                component={ forwardRef((props, ref) => <NavLink exact to={link} {...props} innerRef={ref} />) }
            >
                <ListItemIcon>
                    <img src={`./assets/icons/${icon}.png`} alt={name} />
                </ListItemIcon>
                <ListItemText primary={name} />

            </ListItem>

        </>
    )
}

SidebarMenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

const useStyles = makeStyles(theme =>
    createStyles({
        menuItem: {
            height: '15%',
            '&.active': {
            background: '#FF3939',
            },
        }
    }),
);
