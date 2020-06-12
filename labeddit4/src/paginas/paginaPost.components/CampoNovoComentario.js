import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card, TextField, Button } from '@material-ui/core';

const CardNovoComentario = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 500px;
    padding: 10px 10px;
    background-color: #38232C;
    color: white;
}
`

export default function CampoNovoComentario(props){

    const [texto, setTexto] = useState('');

    const enviarComentario = () =>{

        const id = props.postId;

        const body = {
            'text': texto
        }

        const token = window.localStorage.getItem('token');
        const headers = {
            'Authorization': token
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`, body, {headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))

        setTexto('');
    }
    return(
        <CardNovoComentario>
            <TextField color='secondary' value={texto} variant='outlined' label='Escreva seu comentário' rows='5' multiline onChange={(e) => setTexto(e.target.value)}/>
            <Button color='secondary' variant='contained' onClick={enviarComentario}>Comentar</Button>
        </CardNovoComentario>
    )
}