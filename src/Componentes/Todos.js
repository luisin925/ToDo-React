import React, { useState } from 'react';
import { agregarTareas } from "../Redux/reducer";
import {PostAdd, SignalCellular1BarRounded, SignalCellular2BarRounded, SignalCellular4BarRounded } from '@material-ui/icons';
import { Select, Input, Button, FormControl, MenuItem} from '@material-ui/core';
import {connect} from "react-redux";
import '../CSS/estilos.css';

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
        <div className="addTarea">
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
                    variant='outlined' 
                    color='primary'
                >
                    <MenuItem disabled value=''><em>Prioridad de tu tarea</em></MenuItem>
                    <MenuItem value={'Alta'} >
                        <SignalCellular4BarRounded color='secondary'/> Prioridad Alta
                    </MenuItem>
                    <MenuItem value={'Media'} >
                        <SignalCellular2BarRounded color='primary'/> Prioridad Media
                    </MenuItem>
                    <MenuItem value={'Baja'} >
                        <SignalCellular1BarRounded color='action'/> Prioridad Baja
                    </MenuItem>
                </Select>
                <br/>
                <Button 
                    variant='outlined' 
                    onClick={() => agregar()}
                    startIcon={<PostAdd/>}
                >
                    Añadir Tarea
                </Button>     
            </FormControl>
        </div>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
