import React, {useRef} from 'react';
import { connect } from 'react-redux';
import { agregarTareas, eliminarTareas, editarTareas, completarTareas} from "../Redux/reducer";
import {Delete, AssignmentTurnedIn, Create, CheckCircle} from "@material-ui/icons";
import { Button, List, ListItemText, Divider, ListItem, ListItemIcon } from '@material-ui/core'; 

const mapStateToProps = (state) =>{
    return{
        tareas: state,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        agregarTarea: (obj) => dispatch(agregarTareas(obj)),
        eliminarTarea: (id) => dispatch(eliminarTareas(id)),
        editarTarea: (obj) => dispatch(editarTareas(obj)),
        completarTarea: (id) => dispatch(completarTareas(id)),
    };
};

const PintarItem = (props) => {

    //const {editarTarea, completarTarea,eliminarTarea} = props;
    
    const ref = useRef(true);
    
    const cambiarEstado = () => {
        ref.current.disabled = false;
        ref.current.focus();
    };
    
        const editar = (id, value, event) => {
            if(event.which === 13){
                props.editarTarea({id, title: value });
                ref.current.disabled = true;
            }
        };


    return (
        <div>
                {
                props.tareas.map((item) =>{
                        return(
                            <List component='ul'>
                                <ListItem>
                                    <ListItemText
                                        inputRef={ref} 
                                        disabled={ref} 
                                        defaultValue={ item.title }
                                        primary={item.title}
                                        secondary= {item.prioridad}
                                    />
                                    <ListItemIcon>

                                    <Button 
                                        color='primary' 
                                        onClick={() => console.log(cambiarEstado())}
                                        startIcon = {<Create/>}
                                        > 
                                        Editar 
                                    </Button>                                  
                                    <Button 
                                        color='primary' 
                                        onClick={() => props.completarTarea(item.id)}
                                        startIcon = {<AssignmentTurnedIn/>}>
                                        Tarea Completada
                                    </Button>
                                    <Button 
                                        color='primary' 
                                        onClick={() => props.eliminarTarea(item.id)}
                                        startIcon ={<Delete/>}
                                        >Eliminar Tarea
                                    </Button>
                                    {item.active && <span> <CheckCircle/> </span>}
                                    </ListItemIcon>
                                </ListItem>
                                <Divider/>
                            </List>
                        );
                        })
                }
        </div>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(PintarItem);



/*
       <ul>
            {
                props.tareas.map((item) =>{
                        return(
                            <TodoItem
                            key={item.id}
                            item={item}
                            eliminarTarea = {props.eliminarTarea}
                            editarTarea = {props.editarTarea}
                            completarTarea = {props.completarTarea}
                            />
                        );
                        })
            }
            </ul>

            */