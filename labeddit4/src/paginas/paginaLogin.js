import React, { useState } from 'react';
import { Card, Button, TextField, Typography } from '@material-ui/core';
import { useParams, useHistory } from "react-router";
import styled from 'styled-components';
import axios from 'axios';

const CardLogin = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    width: 400px;
    height: 375px;
    Button{
        margin-top: 30px;
        margin-left: 30px;
        margin-right: 30px;
    }
    background-color: #38232C;
    color: white;
}
`
const CampoTexto = styled(TextField)`
&&{
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
}
`
const Titulo = styled(Typography)`
&&{
    margin-left: 30px;
    margin-top: 10px;
    color: white;
}
`

export default function PaginaLogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    const irParaCadastro = () =>{
        history.push('/cadastro');   
    }

    const fazerLogin = () =>{

        const body = {
            'email': email,
            'password': senha
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
        .then(res => {
            const token = res.data.token;

            window.localStorage.setItem('token', token);

            history.push('/feed')

        })
        .catch(err => console.log(err))

    }

    return (
        <CardLogin>
            <Titulo>Labeditt4</Titulo>
            <CampoTexto color='secondary'  value={email} type='email' variant='outlined' label='Email' onChange={(e) => setEmail(e.target.value)}/>
            <CampoTexto color='secondary'  value={senha} type='password' variant='outlined' label='Senha' onChange={(e) => setSenha(e.target.value)}/>    <Button size='big' variant='contained' color='secondary' onClick={fazerLogin}>Entrar</Button>
            <Button size='big' variant='outlined' onClick={irParaCadastro}>Cadastrar</Button>
        </CardLogin>
    )

}

