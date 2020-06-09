import React from 'react';
import { Card, Button, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

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
}
`

export default function PaginaCadastro() {

    return (
        <CardCadastro>
            <Titulo color='primary'>Labeditt4</Titulo>
            <CampoTexto type='text' variant='outlined' label='Nome de usuário'/>
            <CampoTexto type='email' variant='outlined' label='Email'/>
            <CampoTexto type='password' variant='outlined' label='Senha'/>
            <Button size='big'  color='primary' variant='contained'>Cadastrar</Button>
        </CardCadastro>
    )

}

