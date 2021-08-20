import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const agregarTareaReducer = createSlice({
    name: "tareas",
    initialState,   
    reducers:{
        //Añadir tareas
        agregarTareas: (state, action) => {
            state.push(action.payload);
            return state;
        },  
        //Eliminar tareas
        eliminarTareas: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        //Actualizar tareas
        editarTareas: (state, action) => {
            return state.map(tarea =>{
                if(tarea.id === action.payload.id){
                    return{
                        ...tarea,
                        item: action.payload.title,
                    }
                }
                return tarea;
            })
        },
        //Tarea completada
        completarTareas: (state, action) => {
            return state.map((tarea) => {
                if(tarea.id === action.payload){
                    return{
                        ...tarea,
                        active:true,
                    };
                }
                return tarea;
            });
        }
    },
});

//Lectura
export const {agregarTareas, eliminarTareas, editarTareas, completarTareas} = agregarTareaReducer.actions;
//Escritura
export const reducer = agregarTareaReducer.reducer;