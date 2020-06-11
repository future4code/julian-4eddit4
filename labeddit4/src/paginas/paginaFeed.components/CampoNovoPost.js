import React, { useState } from 'react';
import styled from 'styled-components'
import { Card, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const CardNovoPost = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
}
`
const CampoTexto = styled(TextField)`
&&{
    margin-bottom: 10px;
}
`

export default function CampoNovoPost(){

    const [titulo, setTitulo] = useState();
    const [texto, setTexto] = useState();

    // TODO: ATUALIZAR A LISTA QUANDO POSTAR

    const postar = () => {
        const body = {
            'title': titulo,
            'text': texto
        }
        const token = window.localStorage.getItem('token');
        const headers = {
            'Authorization': token
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body, {headers})
        .then(res =>{
            console.log(res)
        })
        .catch(err => console.log(err))

        setTitulo('');
        setTexto('');
    }
    return(
        <CardNovoPost>
            <CampoTexto value={titulo} variant='outlined' onChange={(e) => setTitulo(e.target.value)} label='Título'/>
            <CampoTexto value={texto} variant='outlined' onChange={(e) => setTexto(e.target.value)} label='Novo Post' rows='8' multiline/>
            <Button color='primary' variant='contained' onClick={postar}>Postar</Button>
        </CardNovoPost>
    )
}