import React from 'react';
import { connect } from 'react-redux';
import { agregarTareas, eliminarTareas, editarTareas, completarTareas} from "../Redux/reducer";
import TodoItem from './TodoItem';
import '../CSS/estilos.css';

const mapStateToProps = (state) =>{
    return{
        tareas: state,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        agregarTarea: (obj) => dispatch(agregarTareas(obj)),
        eliminarTarea: (id) => dispatch(eliminarTareas(id)),
        editarTarea:(obj) => dispatch(editarTareas(obj)),
        completarTarea:(id) => dispatch(completarTareas(id)),
    };
};


const PintarItem = (props) => {
    return (
                props.tareas.map((item) =>{
                    return(
                    <div className="todoCard">
                        <TodoItem
                            key={item.id}
                            item={item}
                            eliminarTarea={props.eliminarTarea}
                            editarTarea={props.editarTarea}
                            completarTarea={props.completarTarea}
                        />
                    </div>
                    )
                })
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(PintarItem);
