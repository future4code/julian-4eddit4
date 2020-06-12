import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { Card, Button, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios';
const CardCadastro = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    width: 400px;
    height: 400px;
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
    background-color: #38232C;
    color: white;
}
`
const Titulo = styled(Typography)`
&&{
    margin-left: 30px;
    margin-top: 10px;
    color: white;
}
`

export default function PaginaCadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();
    
    const handleCadastrar = () =>{

        const novoUsuario = {
            'username': nome,
            'email': email,
            'password': senha
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', novoUsuario)
        .then(res =>{
            const token = res.data.token;
            window.localStorage.setItem('token', token);
            history.push('/feed')
        })
        .catch(err => console.log(err))
    }

    return (
        <CardCadastro>
            <Titulo>Labeditt4</Titulo>
            <CampoTexto  color='secondary' value={nome} type='text' variant='outlined' label='Nome de usuário' onChange={(e) => setNome(e.target.value)}/>
            <CampoTexto  color='secondary' value={email} type='email' variant='outlined' label='Email' onChange={(e) => setEmail(e.target.value)}/>
            <CampoTexto  color='secondary' value={senha} type='password' variant='outlined' label='Senha' onChange={(e) => setSenha(e.target.value)}/>
            <Button onClick={handleCadastrar} size='big'  color='secondary' variant='contained'>Cadastrar</Button>
        </CardCadastro>
    )

}

