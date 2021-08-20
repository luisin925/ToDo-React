import React, { useRef } from 'react';
import { Delete, AssignmentTurnedIn, Create, CheckCircle } from '@material-ui/icons';
import { Button, Typography, ListItemText } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/styles';
import theme from './TemaConfig';

const TodoItem = (props) => {
    const {item, editarTarea, completarTarea,eliminarTarea} = props;
    
    const ref = useRef(true);
    
    const cambiarEstado = () => {
        ref.current.disabled = false;
        ref.current.focus();
    };
    
        const editar = (id, value, event) => {
            if(event.which === 13){
                editarTarea({id, item: value });
                ref.current.disabled = true;
            }
        };

    return (
        <ThemeProvider theme={theme}>
            <Typography variant="body1" color="initial" paragraph>
    
            <ListItemText 
                inputRef={ref} 
                disabled={ref} 
                defaultValue={ item.item }
                onKeyPress={(event) => editar(item.id, ref.current.value, event)}
            />    


            
            {" "}
            {item.completado && <span> <CheckCircle/> </span>}
            </Typography>
        </ThemeProvider>   
            
    );
};



/*
export default TodoItem

<Button 
color='primary' 
onClick={() => cambiarEstado()}
startIcon = {<Create/>}
> 
Editar 
</Button>

<Button 
color='primary' 
onClick={() => completarTarea(item.id)}
startIcon = {<AssignmentTurnedIn/>}
>
Tarea Completada
</Button>

<Button 
color='primary' 
onClick={() => eliminarTarea(item.id)}
startIcon ={<Delete/>}
>
Eliminar Tarea
</Button> */