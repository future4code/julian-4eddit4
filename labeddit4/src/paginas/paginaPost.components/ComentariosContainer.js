import React, { useState, useEffect } from 'react';
import syled from 'styled-components';
import Comentario from './Comentario';
import axios from 'axios';

export default function ComentariosContainer(props){
    const [listaComentarios, setListaComentarios] = useState('')

    const pegaComentarios = () =>{
        const id = props.postId;
        const token = window.localStorage.getItem('token');
      
        const headers = {
          'Authorization': token
        }
      
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers})
        .then(res => setListaComentarios(res.data.post.comments))
        .catch(err => console.log(err))
      }
      
      useEffect(() => {
        pegaComentarios();
      }, [listaComentarios])
    
    return (
        <div>
            {listaComentarios ? listaComentarios.map(comentario => {
                return (<Comentario postId={props.postId} comentario={comentario}/>)
            }) : <p>Carregando...</p>}
        </div>
    )

}