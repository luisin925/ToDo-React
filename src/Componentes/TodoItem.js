import React, { useRef } from 'react';
import { Delete, AssignmentTurnedIn, Create, CheckCircle } from '@material-ui/icons';
import { Button, Typography, Input, Container } from '@material-ui/core';
import { SignalCellular1BarRounded, SignalCellular2BarRounded, SignalCellular4BarRounded } from '@material-ui/icons';

import { Card, CardActionArea, CardActions, CardContent } from '@material-ui/core';




const TodoItem = (props) => {

    const { item, editarTarea, completarTarea, eliminarTarea } = props;
    const ref = useRef(true);

    const cambiarEstado = () => {
        ref.current.disabled = false;
        ref.current.focus();
    };

    const editar = (id, value, event) => {
        if (event.which === 13) {
            editarTarea({ id, item: value });
            ref.current.disabled = true;
        }
    };

    return (
        <Container>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography>
                            <div className="todoContent">
                                <Input
                                    color='secondary'
                                    inputRef={ref}
                                    disabled={ref}
                                    defaultValue={item.title}
                                    onKeyPress={(event) => editar(item.id, ref.current.value, event)}
                                />
                                <div className="todoPriority">
                                    {item.prioridad === 'Alta' && <SignalCellular4BarRounded color='secondary' />}
                                    {item.prioridad === 'Media' && <SignalCellular2BarRounded color='primary' />}
                                    {item.prioridad === 'Baja' && <SignalCellular1BarRounded color='action' />}
                                    {item.active && <span> <CheckCircle /> </span>}
                                </div>
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        color='primary'
                        onClick={() => cambiarEstado()}
                        startIcon={<Create />}
                        size="small"
                    > Editar
                    </Button>

                    <Button
                        color='primary'
                        onClick={() => completarTarea(item.id)}
                        startIcon={<AssignmentTurnedIn />}
                        size="small"
                    >Tarea Completada
                    </Button>

                    <Button
                        color='primary'
                        onClick={() => eliminarTarea(item.id)}
                        startIcon={<Delete />}
                        size="small"
                    >Eliminar Tarea
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default TodoItem
