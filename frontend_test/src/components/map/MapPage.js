import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Checkbox, Divider, FormControlLabel, Typography } from '@material-ui/core';
import { LocationItem } from './LocationItem';

import ReactMapGL, { Popup, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapPage = () => {

    const mapBoxAccessToken = 'pk.eyJ1IjoiYWRyaWFuY2FycmVvbiIsImEiOiJja2xyYXZmbGkxMnp2MnVvem81dzJpZmZoIn0.QolubeBsFJx_qmsT1yLUqw';
    
    const classes = useStyles();

    const [recruitSelected, setRecruitSelected] = useState(null);

    const { recruits } = useSelector(store => store.recruit);
    recruits.sort((a,b) => a.id_recruit - b.id_recruit);
    
    const [lat, setLat] = useState(40.85216);
    const [lng, setLng] = useState(14.26811);
    const [zoom, setZoom] = useState(12);
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lng,
        height: '100%',
        width: '100%',
        zoom: zoom,
    });

    useEffect(() => {
        setViewport({...viewport, latitude: lat, longitude: lng, zoom: 12})
    }, [lat, lng])
    
    const navControlStyle= {
        right: 10,
        top: 10
    };
    
    const handleClickRecruit = (idRecrtuit) =>{
        const tempRecruit = recruits.find(recruit => recruit.id_recruit === idRecrtuit);
        setRecruitSelected(tempRecruit);
        setLat(Number(tempRecruit.latitude));
        setLng(Number(tempRecruit.longitude));
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.appbar} display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row" className={classes.appbarRow}>
        
                    <Typography>Show only:</Typography>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                classes={{root: classes.checkbox}}
                            />
                        }
                        label="Alphas"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                classes={{root: classes.checkbox}}
                            />
                        }
                        label="Job Orders"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={true}
                                classes={{root: classes.checkbox}}
                            />
                        }
                        label="Companies"
                    />

                </Box>
            </Box>

            <Box display="flex" flexDirection="row">
                
                <Box display="flex" flexDirection="column" className={classes.boxLocations}>

                    {
                        recruits.map( recruit => (
                            <div key={recruit.id_recruit} onClick={() => handleClickRecruit(recruit.id_recruit)}>
                                <LocationItem 
                                    activity={recruit.title}
                                    city={recruit.name_location}
                                    name={recruit.first_name + ' ' + recruit.last_name}
                                    phone={recruit.phone}
                                    selected={ recruitSelected?.id_recruit === recruit.id_recruit ? true : false}
                                    title= "Talent"
                                    zipCode={recruit.zipcode}
                                />
                                <Divider />
                            </div>
                        ))
                    }
                </Box>

                <Box className={classes.boxMap}>
                    <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={mapBoxAccessToken}
                        mapStyle='mapbox://styles/mapbox/streets-v11'
                        onViewportChange={(viewport) => setViewport(viewport)}
                        height='100%'
                    >
                        <NavigationControl style={navControlStyle}/>
                        
                        { recruitSelected !== null &&
                            <Popup
                                anchor='top'
                                className='map__popup'
                                latitude={lat}
                                longitude={lng}
                                closeButton={false}
                                closeOnClick={false}
                            >
                                <h3>{recruitSelected.first_name + ' ' + recruitSelected.last_name}</h3>
                            </Popup>
                        }

                    </ReactMapGL>
                    
                </Box>


            </Box>

        </Box>
    )
}

const useStyles = makeStyles((theme) =>({
    appbar:{
        backgroundColor: theme.palette.appbar.main,
        fontSize: '16px',
        height: '45px',
        justifyContent: 'center',        
    },
    appbarRow:{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '50%'
    },
    boxLocations: {
        overflow: 'auto',
        height:'84vh',
        width: '30%',
    },
    boxMap: {
        width: '70%',
    },
    checkbox:{
        color: theme.palette.primary.detail + " !important",
    },
    container:{
        backgroundColor: theme.palette.primary.main,
    },
    
}));
