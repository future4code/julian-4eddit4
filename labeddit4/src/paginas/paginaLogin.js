import React from 'react';
import { Card, Button, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

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

export default function PaginaLogin() {

    return (
        <CardLogin>
            <Titulo color='primary'>Labeditt4</Titulo>
            <CampoTexto type='email' variant='outlined' label='Email'/>
            <CampoTexto type='password' variant='outlined' label='Senha'/>
            <Button size='big' variant='contained' color='primary'>Entrar</Button>
            <Button size='big' variant='outlined'>Cadastrar</Button>
        </CardLogin>
    )

}

