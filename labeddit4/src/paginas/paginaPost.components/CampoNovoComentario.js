import React from 'react';
import styled from 'styled-components'
import { Card, TextField, Button } from '@material-ui/core';

const CardNovoComentario = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 500px;
    padding: 10px 10px;
}
`

export default function CampoNovoComentario(){

    return(
        <CardNovoComentario>
            <TextField variant='outlined' label='Escreva seu comentário' rows='5' multiline/>
            <Button color='primary' variant='contained'>Comentar</Button>
        </CardNovoComentario>
    )
}