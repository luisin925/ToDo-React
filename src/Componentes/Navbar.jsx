import React from 'react';
import { IconButton, AppBar, Toolbar, Typography} from '@material-ui/core';
import {Menu, PersonOutline} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

//Estilos de NavBar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title:{
        position: 'relative',
        width: '50%',
    },
    login:{
        position: 'relative',
        width: '100%',
        justify: 'rigth',
    },
    avatar:{
        position: 'relative',
    },
    
}))

//Componente NavBar
export default function Navbar ()  {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor:'black'}}>
                <Toolbar>
                    <IconButton edge='start' color='inherit'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        <p className={classes.todo}>ToDo</p>
                    </Typography>
                    <IconButton edge='start' color='inherit' className={classes.avatar}>
                        <PersonOutline/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            </div>    
    )
}
