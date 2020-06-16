import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
import CampoNovoComentario from './paginaPost.components/CampoNovoComentario';
import Post from './paginaPost.components/Post';
import ComentariosContainer from './paginaPost.components/ComentariosContainer';

export default function PaginaPost({ match }){

    const history = useHistory();

    const irPaginaFeed = () =>{

        history.push('/feed')
    }
    return(
        <div>
        <Post postId={match.params.id}/>
        <CampoNovoComentario postId={match.params.id}/>
        <ComentariosContainer postId={match.params.id}/>
        <Button variant='outlined' onClick={irPaginaFeed}>Voltar</Button>
        </div>
    )
}