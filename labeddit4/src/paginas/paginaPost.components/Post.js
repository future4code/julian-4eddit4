import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-ui/core";
import styled from "styled-components";
import ArrowUp from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDown from "@material-ui/icons/ArrowDownwardRounded";
import axios from 'axios';

const CardPost = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    padding: 10px 10px;
    padding-bottom: 50px;
    min-height: 200px;
    position: relative;
    background-color: #38232C;
    color: white;
  }
`;
const ArrowUpVotado = styled(ArrowUp)`
  && {
    color: lime;
  }
`;
const ArrowDownVotado = styled(ArrowDown)`
  && {
  }
`;

const Votes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
const Comentarios = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default function Post(props) {
const [post, setPost] = useState('')
const [votoUp, setVotoUp] = useState(false);
const [votoDown, setVotoDown] = useState(false);

const pegaPost = () =>{
  const id = props.postId;
  const token = window.localStorage.getItem('token');

  const headers = {
    'Authorization': token
  }

  axios
  .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers})
  .then(res => {
    setPost(res.data.post)
    if(res.data.post.userVoteDirection === 1){
      setVotoUp(true)
    }else if(res.data.post.userVoteDirection === -1){
      setVotoDown(true)
    }
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  pegaPost();
}, [votoUp, votoDown])

const votar = (valor) => {

if(votoUp || votoDown){
  valor = 0;
}

  const id = props.postId;
  const token = window.localStorage.getItem('token');

  const body = {
    "direction": valor
  }

  const headers = {
    'Authorization': token
  }

  axios
  .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {headers})
  .then(res => console.log(res))
  .catch(err => console.log(err))

  if(valor === 1){
    setVotoUp(true);
  }else if(valor === -1){
    setVotoDown(true)
  }else{
    setVotoDown(false)
    setVotoUp(false);
  }
}
  return (
    <CardPost>
      <Typography align="center" variant="h5">
        {post.username}: {post.title}
      </Typography>
      <hr />
      <Typography align="justify">{post.text}</Typography>
      <Votes>
        {votoUp ? <ArrowUpVotado style={{cursor: 'pointer'}} onClick={() => votar(1)}/> : <ArrowUp style={{cursor: 'pointer'}} onClick={() => votar(1)}/>} {post.votesCount}{" "}
        {votoDown ?  <ArrowDownVotado color="secondary" style={{cursor: 'pointer'}} onClick={() => votar(-1)}/> : <ArrowDown style={{cursor: 'pointer'}} onClick={() => votar(-1)}/>}
      </Votes>
      <Comentarios>Comentários: {post.commentsCount}</Comentarios>
    </CardPost>
  );
}
