import React, { useState } from 'react';
import { agregarTareas } from "../Redux/reducer";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Select, Input, Button, Container, FormControl, MenuItem } from '@material-ui/core';

import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        tareas: state,
    };
};

const mapDispatchToProps = (dispatch) =>{

    return{
        agregarTarea: (obj) => dispatch(agregarTareas(obj)),
    };
};

const Todos = (props) => {
const [tarea, setTarea] = useState("");
const[value, setValue] = useState("");

const actualizarEstado = (event) => {
    setTarea(event.target.value);
}

const actualizarEstadoSelect = (event) => {
    setValue(event.target.value);
}

const agregar = () => {
    if(tarea === "" || value ===""){
        alert("Su nota esta vacia o no ha seleccionado la prioridad");
    }else {
        props.agregarTarea({
            id: Math.floor(Math.random() * 1000),
            title: tarea,
            active: false,
            prioridad: value, 
        });
        setTarea("");
        setValue("");
    }
};

    return (
        <Container>
            <FormControl>
                <Input
                    type="text" 
                    onChange={(event) => actualizarEstado(event)} 
                    value={tarea}
                    placeholder = "Describe tu tarea"
                    />
                <br/>
                <Select
                    displayEmpty
                    value={value}
                    onChange={(event) => actualizarEstadoSelect(event)} 
                >
                    <MenuItem disabled value=''><em>Prioridad de tu tarea</em></MenuItem>
                    <MenuItem value={'Alta'}>Alta</MenuItem>
                    <MenuItem value={'Media'}>Media</MenuItem>
                    <MenuItem value={'Baja'}>Baja</MenuItem>
                </Select>
                <br/>
                <Button 
                    color='primary' 
                    onClick={() => agregar()}
                    startIcon={<PostAddIcon/>}
                >
                    Añadir Tarea
                </Button>     
                <br/>
            </FormControl>
        </Container>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
