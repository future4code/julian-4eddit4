import React from 'react';
import styled from 'styled-components'
import { Card, TextField, Button } from '@material-ui/core';

const CardNovoPost = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
}
`

export default function CampoNovoPost(){

    return(
        <CardNovoPost>
            <TextField variant='outlined' label='Novo Post' rows='8' multiline/>
            <Button color='primary' variant='contained'>Postar</Button>
        </CardNovoPost>
    )
}