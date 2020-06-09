import React, { useState } from 'react';
import { Card, Typography } from '@material-ui/core'
import styled from 'styled-components';
import Post from './Post';

const CardPost = styled(Card)`
&&{
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
    min-height: 200px;
}
`

export default function PostsContainer(props){

    return (
        <CardPost>
            <Typography align='center' color='primary'>{props.post.nome}</Typography>
            <Typography>{props.post.texto}</Typography>
        </CardPost>
    )

}