import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

//Estilos de NavBar
const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        backgroundImage: `url(https://www.muycomputer.com/wp-content/uploads/2021/06/Monterey-1.jpg)`,
    },
    title:{
        flexGrow: 1,
        alignSelf: 'flex-end',
        fontSize: '70px',
        fontStyle: 'Oblique',
    },
    subtitle:{
        flexGrow: 1,
        alignSelf: 'flex-end',
        fontSize: '25px',
        fontStyle: 'Oblique',
    }
}));

function getFecha() {
    
    //Variables y metodos para obtener fecha actual
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    hoy.toDateString(); 
    return hoy.toString();     
}
        

//Componente NavBar
const Navbar = () => {
    const classes = useStyles();
    const hoy = getFecha();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title}>
                        MI DÍA
                        <Typography className={classes.subtitle}>
                            {hoy}
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
                <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar
