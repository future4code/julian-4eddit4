import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import CampoNovoComentario from './paginaPost.components/CampoNovoComentario';
import Post from './paginaPost.components/Post';
import ComentariosContainer from './paginaPost.components/ComentariosContainer';

export default function PaginaPost(){

    return(
        <div>
        <Post/>
        <CampoNovoComentario/>
        <ComentariosContainer/>
        <Button variant='outlined'>Voltar</Button>
        </div>
    )
}